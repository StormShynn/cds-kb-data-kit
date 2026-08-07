---
name: D_BDRCRTEFRMEXTPAYTCARDP
description: D Bdrcrtefrmextpaytcardp
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTPAYTCARDP

**D Bdrcrtefrmextpaytcardp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
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
@EndUserText.label: 'Crte BDR from Ext Data - PaytCard Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtPaytCardP { 

ElectronicPaymentType           : vdm_epayt_type; //Mandatory

EPaytByDigitalPaymentSrvc       : vdm_epayt_token;

ElectronicPayment               : vdm_epayt_number;
  
EPaytValidityStartDate          : vdm_epayt_validfrom;

EPaytValidityEndDate            : vdm_epayt_validto;

ElectronicPaymentHolderName     : vdm_epayt_holder;

@Semantics.amount.currencyCode: 'AuthorizationCurrency' 
AuthorizedAmountInAuthznCrcy    : vdm_epayt_authrdamount;

AuthorizationCurrency           : waers;

AuthorizationDate               : vdm_epayt_authzndate;

AuthorizationTime               : vdm_epayt_authzntime;

AuthorizationByDigitalPaytSrvc  : vdm_epayt_authznnumber;

AuthorizationByAcquirer         : vdm_epayt_authrefcode;

MerchantByClearingHouse         : vdm_epayt_merchantid;

PreauthorizationIsRequested     : vdm_epayt_preauthorization;

PaymentServiceProvider          : dp_payment_service_provider;

PaymentByPaymentServicePrvdr    : dp_payid;

TransactionByPaytSrvcPrvdr      : dp_psp_trans_id;

}
```
