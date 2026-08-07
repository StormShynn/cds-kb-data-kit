---
name: I_BILLINGPLANUSAGECATEGORYTEXT
description: "Billingplanusagecategorytext"
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
  - text-view
  - billing
  - text
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANUSAGECATEGORYTEXT

**Billingplanusagecategorytext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanUsageCategory` | ✓ | |  | `SUBSTRING(dd07t.domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanUsageCategoryName` |  | |  | `ddtext` |  |  |
| `_BillingPlanUsageCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanUsageCategory` | `I_BillingPlanUsageCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanUsageCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Usage Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBPUSAGECATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_BillingPlanUsageCategoryText
  as select from dd07t

  association [0..1] to I_BillingPlanUsageCategory as _BillingPlanUsageCategory on $projection.BillingPlanUsageCategory = _BillingPlanUsageCategory.BillingPlanUsageCategory
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanUsageCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
  key SUBSTRING(dd07t.domvalue_l, 1, 1) as BillingPlanUsageCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text
      ddtext                      as BillingPlanUsageCategoryName,

      //Association
      _BillingPlanUsageCategory,
      _Language
}
where
      dd07t.domname  = 'SDBP_BPCAT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
