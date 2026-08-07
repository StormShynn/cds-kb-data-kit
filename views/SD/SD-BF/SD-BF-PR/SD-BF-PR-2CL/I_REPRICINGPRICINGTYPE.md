---
name: I_REPRICINGPRICINGTYPE
description: "Repricingpricingtype"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_REPRICINGPRICINGTYPE

**Repricingpricingtype**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREPRCPRCTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Pricing Type Used for Repricing'
@VDM.viewType: #BASIC
@Search.searchable: true
@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PricingType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@Metadata.ignorePropagatedAnnotations:true

define view I_RepricingPricingType
  as select from I_PricingType as PricingType

  association [0..*] to I_PricingTypeText as _Text on $projection.PricingType = _Text.PricingType
{

       @ObjectModel.text.association: '_Text'
  key  PricingType.PricingType,

       @Search.defaultSearchElement: true
       _Text

}
where
     PricingType = 'A' // Copy price elements and redetermine scales
  or PricingType = 'B' // Carry out new pricing
  or PricingType = 'C' // Copy manual price elements and redetermine the others
  or PricingType = 'D' // Copy price elements unchanged
  or PricingType = 'G' // Copy price elements unchanged and redetermine taxes
  or PricingType = 'H' // Redetermine freight conditions
  or PricingType = 'K' // Copy price elements and cost. Redetermine taxes.
  or PricingType = 'L' // Redetermine freights and taxes.
  or PricingType = 'N' // Copy price elements unchanged, new cost
  or PricingType = 'O' // Redetermine variant conditions (KNTYP=O)
```
