---
name: I_BILLINGPLANCATEGORYTEXT
description: Billingplancategorytext
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
# I_BILLINGPLANCATEGORYTEXT

**Billingplancategorytext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingPlanCategory` | ✓ | |  | `cast( dd07t.domvalue_l as fptyp_fp )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `BillingPlanCategoryName` |  | |  | `ddtext` |
| `_BillingPlanCategory` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanCategory` | `I_BillingPlanCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
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

define view entity I_BillingPlanCategoryText
  as select from dd07t

  association [0..1] to I_BillingPlanCategory as _BillingPlanCategory on $projection.BillingPlanCategory = _BillingPlanCategory.BillingPlanCategory
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanCategory'
  key cast( dd07t.domvalue_l as fptyp_fp ) as BillingPlanCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text: true
      ddtext                      as BillingPlanCategoryName,

      //Associations
      _BillingPlanCategory,
      _Language
}
where
      dd07t.domname  = 'FPTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
