---
name: I_JVACTBCKORDMAPPGINTER
description: Jvactbckordmappginter
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVACTBCKORDMAPPGINTER

**Jvactbckordmappginter**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `JVACtbckOrdMappgInterBsc.CompanyCode` |
| key `JntVntrIntcoCode` | `JVACtbckOrdMappgInterBsc.JntVntrIntcoCode` |
| key `JVAFromOrder` | `JVACtbckOrdMappgInterBsc.JVAFromOrder` |
| `JVARangeToOrder` | `JVACtbckOrdMappgInterBsc.JVARangeToOrder` |
| `JVACutbackCostCenter` | `JVACtbckOrdMappgInterBsc.JVACutbackCostCenter` |
| `JVACutbackOrder` | `JVACtbckOrdMappgInterBsc.JVACutbackOrder` |
| `JVACutbackWBS` | `JVACtbckOrdMappgInterBsc.JVACutbackWBS` |
| `JVACutbackWBSExt` | `_CutbackWBSElement.WBSElementExternalID` |
| `JVAInterCompanyControllingArea` | `_InterCompanyCompanyCode.ControllingArea` |
| `_CompanyCode` | *Association* |
| `_InterCompanyCompanyCode` | *Association* |
| `_JVAFromOrder` | *Association* |
| `_JVARangeToOrder` | *Association* |
| `_CutbackCostCenter` | *Association* |
| `_JVACutbackOrder` | *Association* |
| `_CutbackWBSElement` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InterCompanyCompanyCode` | `I_CompanyCode` | [0..1] |
| `_JVAFromOrder` | `I_Order` | [0..1] |
| `_JVARangeToOrder` | `I_Order` | [0..1] |
| `_CutbackCostCenter` | `I_CostCenter` | [0..*] |
| `_JVACutbackOrder` | `I_Order` | [0..1] |
| `_CutbackWBSElement` | `I_WBSElementByInternalKey` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Order Mapping Intercompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'JVAFromOrder'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

define view entity I_JVACtbckOrdMappgInter

  as select from I_JVACtbckOrdMappgInterBsc as JVACtbckOrdMappgInterBsc

  association [0..1] to I_CompanyCode             as _CompanyCode             on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_CompanyCode             as _InterCompanyCompanyCode on  _InterCompanyCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_Order                   as _JVAFromOrder            on  _JVAFromOrder.OrderID = $projection.JVAFromOrder

  association [0..1] to I_Order                   as _JVARangeToOrder         on  _JVARangeToOrder.OrderID = $projection.JVARangeToOrder

  association [0..*] to I_CostCenter              as _CutbackCostCenter       on  _CutbackCostCenter.ControllingArea = $projection.JVAInterCompanyControllingArea
                                                                              and _CutbackCostCenter.CostCenter      = $projection.JVACutbackCostCenter

  association [0..1] to I_Order                   as _JVACutbackOrder         on  _JVACutbackOrder.OrderID = $projection.JVACutbackOrder

  association [0..1] to I_WBSElementByInternalKey as _CutbackWBSElement       on  _CutbackWBSElement.WBSElementInternalID = $projection.JVACutbackWBS

{

  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckOrdMappgInterBsc.CompanyCode,
  @ObjectModel.foreignKey.association: '_InterCompanyCompanyCode'
  key JVACtbckOrdMappgInterBsc.JntVntrIntcoCode,
  key JVACtbckOrdMappgInterBsc.JVAFromOrder,
      JVACtbckOrdMappgInterBsc.JVARangeToOrder,
      JVACtbckOrdMappgInterBsc.JVACutbackCostCenter,
      JVACtbckOrdMappgInterBsc.JVACutbackOrder,
      JVACtbckOrdMappgInterBsc.JVACutbackWBS,
      _CutbackWBSElement.WBSElementExternalID as JVACutbackWBSExt,
      _InterCompanyCompanyCode.ControllingArea as JVAInterCompanyControllingArea,

      _CompanyCode,
      _InterCompanyCompanyCode,
      _JVAFromOrder,
      _JVARangeToOrder,
      _CutbackCostCenter,
      _JVACutbackOrder,
      _CutbackWBSElement

}
```
