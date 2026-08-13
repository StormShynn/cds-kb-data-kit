---
name: D_BILLGDOCCRTEFRMEXTPAYTCARDIP
description: "D Billgdoccrtefrmextpaytcardip"
semantic_vi: "View D_BILLGDOCCRTEFRMEXTPAYTCARDIP hiển thị dữ liệu thanh toán điện tử, bao gồm loại thanh toán, ngày hết hạn và chi tiết xác thực. Nó được sử dụng để lấy thông tin về các giao dịch thanh toán điện tử."
keywords:
  - "electronic payment"
  - "thanh toán điện tử"
  - "payment type"
  - "loại thanh toán"
  - "authorization"
  - "xác thực"
  - "sap"
  - "sd-bil"
  - "sales and distribution"
  - "bán hàng và phân phối"
semantic_en: "The D_BILLGDOCCRTEFRMEXTPAYTCARDIP view exposes electronic payment data, including payment types, validity dates, and authorization details. It is used to retrieve information about electronic payment transactions."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTPAYTCARDIP

**D Billgdoccrtefrmextpaytcardip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicPaymentType` |  | |  | `vdm_epayt_type` |  |  |
| `EPaytByDigitalPaymentSrvc` |  | |  | `vdm_epayt_token` |  |  |
| `ElectronicPayment` |  | |  | `vdm_epayt_number` |  |  |
| `EPaytValidityStartDate` |  | |  | `vdm_epayt_validfrom` |  |  |
| `EPaytValidityEndDate` |  | |  | `vdm_epayt_validto` |  |  |
| `ElectronicPaymentHolderName` |  | |  | `vdm_epayt_holder` |  |  |
| `AuthorizedAmountInAuthznCrcy` |  | |  | `vdm_epayt_authrdamount` |  |  |
| `AuthorizationCurrency` |  | |  | `waers` |  |  |
| `AuthorizationDate` |  | |  | `vdm_epayt_authzndate` |  |  |
| `AuthorizationTime` |  | |  | `vdm_epayt_authzntime` |  |  |
| `AuthorizationByDigitalPaytSrvc` |  | |  | `vdm_epayt_authznnumber` |  |  |
| `AuthorizationByAcquirer` |  | |  | `vdm_epayt_authrefcode` |  |  |
| `MerchantByClearingHouse` |  | |  | `vdm_epayt_merchantid` |  |  |
| `PreauthorizationIsRequested` |  | |  | `vdm_epayt_preauthorization` |  |  |
| `PaymentServiceProvider` |  | |  | `dp_payment_service_provider` |  |  |
| `PaymentByPaymentServicePrvdr` |  | |  | `dp_payid` |  |  |
| `TransactionByPaytSrvcPrvdr` |  | |  | `dp_psp_trans_id` |  |  |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Payment Card - Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BillgDocCrteFrmExtPaytCardIP 
{
 
  ElectronicPaymentType          : vdm_epayt_type; //Mandatory
 
  EPaytByDigitalPaymentSrvc      : vdm_epayt_token;
 
  ElectronicPayment              : vdm_epayt_number;
 
  EPaytValidityStartDate         : vdm_epayt_validfrom;
 
  EPaytValidityEndDate           : vdm_epayt_validto;
 
  ElectronicPaymentHolderName    : vdm_epayt_holder;
 
  @Semantics.amount.currencyCode : 'AuthorizationCurrency'
  AuthorizedAmountInAuthznCrcy   : vdm_epayt_authrdamount;
 
  AuthorizationCurrency          : waers;
 
  AuthorizationDate              : vdm_epayt_authzndate;
 
  AuthorizationTime              : vdm_epayt_authzntime;
 
  AuthorizationByDigitalPaytSrvc : vdm_epayt_authznnumber;
 
  AuthorizationByAcquirer        : vdm_epayt_authrefcode;
 
  MerchantByClearingHouse        : vdm_epayt_merchantid;
 
  PreauthorizationIsRequested    : vdm_epayt_preauthorization;
 
  PaymentServiceProvider         : dp_payment_service_provider;
 
  PaymentByPaymentServicePrvdr   : dp_payid;
 
  TransactionByPaytSrvcPrvdr     : dp_psp_trans_id;
}
```
