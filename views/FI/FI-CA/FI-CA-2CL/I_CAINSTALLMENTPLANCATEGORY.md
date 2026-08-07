---
name: I_CAINSTALLMENTPLANCATEGORY
description: Cainstallmentplancategory
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
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
# I_CAINSTALLMENTPLANCATEGORY

**Cainstallmentplancategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInstallmentPlanCategory` | ✓ | |  | `rpcat` |
| `CACreditWorthinessRatingValue` |  | |  | `bonit` |
| `CAInstlmntPlnItmIntrstCalcType` |  | |  | `rpint` |
| `CAInstlmntPlnItmSettlementType` |  | |  | `verart` |
| `CAInstlmntPlanChargeType` |  | |  | `chgty` |
| `CASurchargesAreCalcdAutomly` |  | |  | `autgeb` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAInstallmentPlanCategoryT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Installment Plan Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAInstallmentPlanCategory',
                sapObjectNodeType.name: 'CAInstallmentPlanCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAInstallmentPlanCategory
  as select from tfk062a

  association [0..*] to I_CAInstallmentPlanCategoryT as _Text on $projection.CAInstallmentPlanCategory = _Text.CAInstallmentPlanCategory

{
      @ObjectModel.text.association: '_Text'
  key rpcat  as CAInstallmentPlanCategory,

      bonit  as CACreditWorthinessRatingValue,
      rpint  as CAInstlmntPlnItmIntrstCalcType,
      verart as CAInstlmntPlnItmSettlementType,
      chgty  as CAInstlmntPlanChargeType,
      autgeb as CASurchargesAreCalcdAutomly,

      _Text
}
```
