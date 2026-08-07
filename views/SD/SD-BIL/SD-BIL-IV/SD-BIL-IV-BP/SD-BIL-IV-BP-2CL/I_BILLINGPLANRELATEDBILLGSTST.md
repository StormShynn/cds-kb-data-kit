---
name: I_BILLINGPLANRELATEDBILLGSTST
description: Billingplanrelatedbillgstst
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
# I_BILLINGPLANRELATEDBILLGSTST

**Billingplanrelatedbillgstst**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingPlanRelatedBillgStatus` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `BillingPlanRelatedBillgStsDesc` |  | |  | `ddtext` |
| `_BillingPlanRelatedBillgStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanRelatedBillgStatus` | `I_BillingPlanRelatedBillgSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Billg Sts for Billing Plan Date - Text'
@VDM: {
  viewType:#BASIC
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IBPRELTDBILLSTST',
  compiler.compareFilter: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'BillingPlanRelatedBillgStatus',
  usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@AbapCatalog.preserveKey:true 

@ObjectModel.supportedCapabilities:  [  #EXTRACTION_DATA_SOURCE  ]
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingPlanRelatedBillgStsT as select from dd07t

association[0..1] to I_BillingPlanRelatedBillgSts as _BillingPlanRelatedBillgStatus on $projection.BillingPlanRelatedBillgStatus = _BillingPlanRelatedBillgStatus.BillingPlanRelatedBillgStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillingPlanRelatedBillgStatus'
    @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanRelatedBillgStatus'
    key SUBSTRING(domvalue_l, 1, 1) as BillingPlanRelatedBillgStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as BillingPlanRelatedBillgStsDesc,
    
    //Associations
    _BillingPlanRelatedBillgStatus,
    _Language
}
where (dd07t.domname = 'FKSAF') and (dd07t.as4local = 'A');
```
