---
name: I_PAYTAUTHSNCREDITCHECKSTS
description: "Paytauthsncreditchecksts"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_PAYTAUTHSNCREDITCHECKSTS

**Paytauthsncreditchecksts**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaytAuthsnCreditCheckSts` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaytAuthsnCreditCheckStsText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'PaytAuthsnCreditCheckSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Payment Authorization Credit Check Status'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYACRDCKSTS'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PaymentAuthznCreditCheckStatus'

define view I_PaytAuthsnCreditCheckSts 
as select from dd07l

association [0..*] to I_PaytAuthsnCreditCheckStsText as _Text on $projection.PaytAuthsnCreditCheckSts = _Text.PaytAuthsnCreditCheckSts
{
    @ObjectModel.text.association: '_Text'
    key SUBSTRING(dd07l.domvalue_l, 1, 1) as PaytAuthsnCreditCheckSts,
    
    //Association
    _Text
}
where (dd07l.domname = 'CMPSZ') and (dd07l.as4local = 'A');
```
