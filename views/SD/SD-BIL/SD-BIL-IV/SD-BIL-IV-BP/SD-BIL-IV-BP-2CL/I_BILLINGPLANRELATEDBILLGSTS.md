---
name: I_BILLINGPLANRELATEDBILLGSTS
description: Billingplanrelatedbillgsts
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - billing
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANRELATEDBILLGSTS

**Billingplanrelatedbillgsts**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanRelatedBillgStatus` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPlanRelatedBillgStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Billing Status for Billing Plan Date'
@VDM: {
  viewType:#BASIC
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IBPRELTDBILLGSTS',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'BillingPlanRelatedBillgStatus',
   usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ObjectModel.supportedCapabilities:  [  #EXTRACTION_DATA_SOURCE  ]
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BillingPlanRelatedBillgStatus'
define view I_BillingPlanRelatedBillgSts as select from dd07l

association [0..*] to I_BillingPlanRelatedBillgStsT as _Text on $projection.BillingPlanRelatedBillgStatus = _Text.BillingPlanRelatedBillgStatus
{
    @ObjectModel.text.association: '_Text'
    key SUBSTRING(dd07l.domvalue_l, 1, 1) as BillingPlanRelatedBillgStatus,
    
    _Text
}
where (dd07l.domname = 'FKSAF') and (dd07l.as4local = 'A');
```
