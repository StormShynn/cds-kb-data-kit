---
name: I_BILLINGPLANUSAGECATEGORY
description: "Billingplanusagecategory"
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
# I_BILLINGPLANUSAGECATEGORY

**Billingplanusagecategory**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanUsageCategory` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPlanUsageCategoryText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingPlanUsageCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Usage Category'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBPUSAGECAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'BillingPlanUsageCategory'
define view I_BillingPlanUsageCategory
  as select from dd07l

  association [0..*] to I_BillingPlanUsageCategoryText as _Text on $projection.BillingPlanUsageCategory = _Text.BillingPlanUsageCategory
{
      @ObjectModel.text.association: '_Text'
  key SUBSTRING(dd07l.domvalue_l, 1, 1) as BillingPlanUsageCategory,

      //Association
      _Text
}
where
      dd07l.domname  = 'SDBP_BPCAT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
