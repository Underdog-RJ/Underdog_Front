<template>
  <div :class="!displayFlag ? '' : 'yincang'">
    <el-input
      @keydown.enter.native="keyDown"
      v-model="inputData"
      :rows="3"
      :autosize="{ minRows: 3, maxRows: 3 }"
      type="textarea"
      @blur="handleInputBlur"
      :maxlength="1000"
      :show-word-limit="true"
      ref="inputArea"
      :placeholder="placeholder"
    ></el-input>
    <div class="operationList">
      <div>
        <el-popover placement="bottom" width="300" trigger="click">
          <div slot="reference">
            <span>😄表情</span>
          </div>
          <div class="emojiList">
            <div
              class="emojiItem"
              v-for="(item, index) in emojis"
              :key="index"
              @click="handleEmoji(item.text)"
            >
              {{ item.text }}
            </div>
          </div>
        </el-popover>
      </div>
      <div style="margin-left: auto">
        <span style="margin-right: 10px; font-size: 15px">Ctrl + Enter</span>
        <el-button type="primary" size="mini" @click="handleSubmit"
          >发表评论</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import emojis from "@/static/emijis";

export default {
  props: ["parentId", "nickname", "clearBtn"],
  watch: {
    clearBtn() {
      this.inputData = "";
    },
  },
  data() {
    return {
      inputData: "",
      cursorIndex: 0,
      maxlength: 1000,
      placeholder: "",
      displayFlag: false,
    };
  },
 
  created() {
    this.emojis = emojis.map((emoji) => ({ text: emoji }));
    if (!this.$isEmpty(this.nickname)) {
      this.placeholder = "回复 @" + this.nickname + ":";
    } else {
      this.placeholder = "发一条友善的评论";
    }
  },
  mounted() {
    // 创建之后立马获取焦点
    this.$refs.inputArea.focus();
  },
  methods: {
    clearContentSon() {
      this.inputData = "";
  
    },
    // 鼠标按键
    keyDown(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        //用户点击了ctrl+enter触发
        this.$emit("getDataFromSon", {
          inputData: this.inputData,
          parentId: this.parentId,
        });
      }
    },
    handleSubmit() {
      this.$emit("getDataFromSon", {
        inputData: this.inputData,
        parentId: this.parentId,
        nickname: this.nickname,
      });
    },
    handleBtn() {},
    handleEmoji(str) {
      if (1000 - this.inputData.length >= 2) {
        let s1 = "";
        let s2 = "";
        if (this.inputData.length < this.cursorIndex) {
          this.inputData = this.inputData + str;
        } else {
          s1 = this.inputData.substring(0, this.cursorIndex);
          s2 = this.inputData.substring(
            this.cursorIndex,
            this.inputData.length
          );
          this.inputData = s1 + str + s2;
        }
      }
      // this.$refs.inputArea.focus();
    },
    handleInputBlur(e) {
      this.cursorIndex = e.srcElement.selectionStart;

      //
    },
  },
};
</script>
<style scoped>
.operationList {
  display: flex;
  margin-top: 10px;
}
.emojiList {
  display: flex;
  flex: 10%;
  flex-wrap: wrap;
  align-content: center;
}
.emojiItem {
  padding: 5px;
  cursor: pointer;
}
.emojiItem:hover {
  transform: scale(1.2);
}
</style>