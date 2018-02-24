<template>
  <div class="confirm">
    <div class="confirm-wrap">
      <div class="title">提示</div>
      <div class="close" @click="close">×</div>
      <div class="text">{{text}}</div>
      <div class="btn-group">
        <span class="agree" @click="confirm">确认</span>
        <span class="cancel" @click="cancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '是否执行此操作？'
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    cancel () {
      this.$emit('cancel')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
  .confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    text-align: center;
    .confirm-wrap {
      position: relative;
      width: 400px;
      height: 300px;
      margin: 200px auto 0;
      background: #fff;
      border-radius: 5px;
      overflow: hidden;
      .title {
        height: 40px;
        line-height: 40px;
        text-align: left;
        margin: 10px 0;
        padding-left: 20px;
        background-color: #eee;
        font-size: 20px;
        color: #3c78d8;
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 20px;
        line-height: 20px;
        width: 20px;
        margin: 10px;
        font-size: 20px;
        background: #a7def7;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
      }
      .text {
        height: 160px;
        line-height: 160px;
        margin: 20px 0;
        font-size: 18px;
      }
      .btn-group {
        width: 100%;
        height: 40px;
        line-height: 40px;
        .agree, .cancel {
          display: inline-block;
          width: 80px;
          height: 40px;
          line-height: 40px;
          background: #5b97f7;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
        }
        .cancel {
          margin-left: 20px;
          background: #fff;
          color: #666;
          border: 1px solid #666;
        }
      }
    }
  }
</style>
