---
name: I_JVACTBCKWBSMAPPGINTER
description: Jvactbckwbsmappginter
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
  - wbs
  - component:CA-JVA
  - lob:Cross-Application Components
  - bo:WBS
---
# I_JVACTBCKWBSMAPPGINTER

**Jvactbckwbsmappginter**

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
| `JntVntrIntcoCode` | ✓ | |  |  |
| `JVAFromProject` | ✓ | |  |  |
| `JVAToProject` |  | |  |  |
| `JVACutbackCostCenter` |  | |  |  |
| `JVACutbackOrder` |  | |  |  |
| `JVACutbackWBS` |  | |  |  |
| `JVACutbackWBSExt` |  | | `_CutbackWBSElement` | `WBSElementExternalID` |
| `JVAInterCompanyControllingArea` |  | | `_InterCompanyCompanyCode` | `ControllingArea` |
| `_CompanyCode` | | ✓ | | |
| `_InterCompanyCompanyCode` | | ✓ | | |
| `_JVAFromProject` | | ✓ | | |
| `_JVAToProject` | | ✓ | | |
| `_CutbackCostCenter` | | ✓ | | |
| `_CutbackOrder` | | ✓ | | |
| `_CutbackWBSElement` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_InterCompanyCompanyCode` | `I_CompanyCode` | [0..1] |
| `_JVAFromProject` | `I_WBSElementByExternalID` | [0..1] |
| `_JVAToProject` | `I_WBSElementByExternalID` | [0..1] |
| `_CutbackCostCenter` | `I_CostCenter` | [0..*] |
| `_CutbackOrder` | `I_Order` | [0..1] |
| `_CutbackWBSElement` | `I_WBSElementByInternalKey` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback WBS Mapping Intercompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'JVAFromProject'
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

define view entity I_JVACtbckWBSMappgInter

  as select from I_JVACtbckWBSMappgInterBsc as JVACtbckWBSMappgInterBsc

  association [0..1] to I_CompanyCode             as _CompanyCode             on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_CompanyCode             as _InterCompanyCompanyCode on  _InterCompanyCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_WBSElementByExternalID  as _JVAFromProject          on  _JVAFromProject.WBSElementExternalID = $projection.JVAFromProject

  association [0..1] to I_WBSElementByExternalID  as _JVAToProject            on  _JVAToProject.WBSElementExternalID = $projection.JVAToProject

  association [0..*] to I_CostCenter              as _CutbackCostCenter       on  _CutbackCostCenter.ControllingArea = $projection.JVAInterCompanyControllingArea
                                                                              and _CutbackCostCenter.CostCenter      = $projection.JVACutbackCostCenter

  association [0..1] to I_Order                   as _CutbackOrder            on  _CutbackOrder.OrderID = $projection.JVACutbackOrder

  association [0..1] to I_WBSElementByInternalKey as _CutbackWBSElement       on  _CutbackWBSElement.WBSElementInternalID = $projection.JVACutbackWBS

{

  @ObjectModel.foreignKey.association: '_CompanyCode'
  key JVACtbckWBSMappgInterBsc.CompanyCode,
  @ObjectModel.foreignKey.association: '_InterCompanyCompanyCode'
  key JVACtbckWBSMappgInterBsc.JntVntrIntcoCode,
  key JVACtbckWBSMappgInterBsc.JVAFromProject,
      JVACtbckWBSMappgInterBsc.JVAToProject,
      JVACtbckWBSMappgInterBsc.JVACutbackCostCenter,
      JVACtbckWBSMappgInterBsc.JVACutbackOrder,
      JVACtbckWBSMappgInterBsc.JVACutbackWBS,
      _CutbackWBSElement.WBSElementExternalID  as JVACutbackWBSExt,
      _InterCompanyCompanyCode.ControllingArea as JVAInterCompanyControllingArea,

      _CompanyCode,
      _InterCompanyCompanyCode,
      _JVAFromProject,
      _JVAToProject,
      _CutbackCostCenter,
      _CutbackOrder,
      _CutbackWBSElement

}
```
