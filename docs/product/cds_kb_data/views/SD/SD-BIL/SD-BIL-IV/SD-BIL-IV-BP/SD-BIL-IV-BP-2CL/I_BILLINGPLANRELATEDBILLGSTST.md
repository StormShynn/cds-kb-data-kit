---
name: I_BILLINGPLANRELATEDBILLGSTST
description: "Billingplanrelatedbillgstst"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanRelatedBillgStatus` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanRelatedBillgStsDesc` |  | |  | `ddtext` |  |  |
| `_BillingPlanRelatedBillgStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
