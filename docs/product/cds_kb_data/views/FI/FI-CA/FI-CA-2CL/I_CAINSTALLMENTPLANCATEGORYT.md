---
name: I_CAINSTALLMENTPLANCATEGORYT
description: "Cainstallmentplancategoryt"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINSTALLMENTPLANCATEGORYT

**Cainstallmentplancategoryt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInstallmentPlanCategory` | ✓ | |  | `rpcat` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAInstallmentPlanCategoryName` |  | |  | `rpctxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Installment Plan Category - Text'

@Analytics.technicalName: 'ICAINSTPLNCATT'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAInstallmentPlanCategory',
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAInstallmentPlanCategoryT
  as select from tfk062at

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key rpcat  as CAInstallmentPlanCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,

      @Semantics.text
      rpctxt as CAInstallmentPlanCategoryName,

      _Language
}
```
