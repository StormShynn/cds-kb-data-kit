---
name: I_JVACTBCKCOSTCTRMAPPGINTRA
description: Jvactbckcostctrmappgintra
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
# I_JVACTBCKCOSTCTRMAPPGINTRA

**Jvactbckcostctrmappgintra**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `JVAFromCostCenter` | ✓ | |  |  |
| `JVAToCostCenter` |  | |  |  |
| `JVACutbackCostCenter` |  | |  |  |
| `JVACutbackOrder` |  | |  |  |
| `JVACutbackWBS` |  | |  |  |
| `JVACutbackWBSExt` |  | | `_CutbackWBS` | `WBSElementExternalID` |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |
| `_CompanyCode` | | ✓ | | |
| `_FromCostCenter` | | ✓ | | |
| `_ToCostCenter` | | ✓ | | |
| `_CutbackCostCenter` | | ✓ | | |
| `_CutbackOrder` | | ✓ | | |
| `_CutbackWBS` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FromCostCenter` | `I_CostCenter` | [0..*] |
| `_ToCostCenter` | `I_CostCenter` | [0..*] |
| `_CutbackCostCenter` | `I_CostCenter` | [0..*] |
| `_CutbackOrder` | `I_Order` | [0..1] |
| `_CutbackWBS` | `I_WBSElementByInternalKey` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Cost Center Mapping Intracompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'JVAFromCostCenter'
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

define view entity I_JVACtbckCostCtrMappgIntra

  as select from I_JVACtbckCostCtrMappgIntraBsc   as JVACtbckCostCtrMappgIntraBsc

  association [0..1] to I_CompanyCode             as _CompanyCode       on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..*] to I_CostCenter              as _FromCostCenter    on  _FromCostCenter.ControllingArea = $projection.ControllingArea
                                                                        and _FromCostCenter.CostCenter      = $projection.JVAFromCostCenter

  association [0..*] to I_CostCenter              as _ToCostCenter      on  _ToCostCenter.ControllingArea = $projection.ControllingArea
                                                                        and _ToCostCenter.CostCenter      = $projection.JVAToCostCenter

  association [0..*] to I_CostCenter              as _CutbackCostCenter on  _CutbackCostCenter.ControllingArea = $projection.ControllingArea
                                                                        and _CutbackCostCenter.CostCenter      = $projection.JVACutbackCostCenter

  association [0..1] to I_Order                   as _CutbackOrder      on  _CutbackOrder.OrderID = $projection.JVACutbackOrder

  association [0..1] to I_WBSElementByInternalKey as _CutbackWBS        on  _CutbackWBS.WBSElementInternalID = $projection.JVACutbackWBS

{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckCostCtrMappgIntraBsc.CompanyCode,
  key JVACtbckCostCtrMappgIntraBsc.JVAFromCostCenter,
      JVACtbckCostCtrMappgIntraBsc.JVAToCostCenter,
      JVACtbckCostCtrMappgIntraBsc.JVACutbackCostCenter,
      JVACtbckCostCtrMappgIntraBsc.JVACutbackOrder,
      JVACtbckCostCtrMappgIntraBsc.JVACutbackWBS,
      _CutbackWBS.WBSElementExternalID as JVACutbackWBSExt,
      _CompanyCode.ControllingArea     as ControllingArea,

      _CompanyCode,
      _FromCostCenter,
      _ToCostCenter,
      _CutbackCostCenter,
      _CutbackOrder,
      _CutbackWBS

}
```
