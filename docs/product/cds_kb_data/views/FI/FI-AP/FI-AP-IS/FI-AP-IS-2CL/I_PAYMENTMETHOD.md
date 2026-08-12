---
name: I_PAYMENTMETHOD
description: "Paymentmethod"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-IS
  - interface-view
  - payment
  - component:FI-AP-IS-2CL
  - lob:Finance
---
# I_PAYMENTMETHOD

**Paymentmethod**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `PaymentMethod` | ✓ | |  | `cast( t042z.zlsch as farp_schzw_bseg )` |  |  |
| `PaymentMethodName` |  | |  | `cast( case when t042zt.text2 is null or t042zt.text2 = '' then t042z.text1 else t042zt.text2 end as farp_schzw_text)` |  |  |
| `PaymentMethodIsUsedForCheck` |  | |  | `xschk` |  |  |
| `PaytMethIsUsdForBillOfExchange` |  | |  | `xwech` |  |  |
| `PaytMethIsUsdForChkBillOfExch` |  | |  | `xswec` |  |  |
| `IsPaytMethForIncomingPayments` |  | |  | `xeinz` |  |  |
| `PaytMethIsUsdForBOEPaytReq` |  | |  | `xwanf` |  |  |
| `PaytMethIsUsdForPaymentRequest` |  | |  | `xzanf` |  |  |
| `BankCollectionAuthznIsRequired` |  | |  | `xezer` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_PaymentMethodText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Payment Method for Country/Region'
@AbapCatalog.sqlViewName: 'IFIPAYMENTMETHOD'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.sapObjectNodeType.name: 'PaymentMethod'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Search.searchable: true
define view I_PaymentMethod
  as select from t042z
  left outer to one join t042zt on t042z.land1 = t042zt.land1 and t042z.zlsch = t042zt.zlsch and t042zt.spras = $session.system_language
  association [0..1] to I_Country as _Country on $projection.Country = _Country.Country
  association [0..*] to I_PaymentMethodText as _Text      on  $projection.Country       = _Text.Country
                                                          and $projection.PaymentMethod = _Text.PaymentMethod

{
      @ObjectModel.foreignKey.association: '_Country'
  key t042z.land1                                   as Country,
      @ObjectModel.text.element: 'PaymentMethodName'
      @Search.defaultSearchElement: true
  key cast( t042z.zlsch as farp_schzw_bseg )        as PaymentMethod,
      @Semantics.text:true
      //@Search.defaultSearchElement: true
      //@Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #HIGH      
      //cast( text1 as farp_schzw_text)         as PaymentMethodName,
      cast( case
              when t042zt.text2 is null or t042zt.text2 = ''
                then t042z.text1
              else t042zt.text2 
            end as farp_schzw_text)           as PaymentMethodName,       
      xschk                                   as PaymentMethodIsUsedForCheck,
      xwech                                   as PaytMethIsUsdForBillOfExchange,
      xswec                                   as PaytMethIsUsdForChkBillOfExch,
      xeinz                                   as IsPaytMethForIncomingPayments,
      xwanf                                   as PaytMethIsUsdForBOEPaytReq,
      xzanf                                   as PaytMethIsUsdForPaymentRequest,
      xezer                                   as BankCollectionAuthznIsRequired,

      _Country,
      _Text

};
```
