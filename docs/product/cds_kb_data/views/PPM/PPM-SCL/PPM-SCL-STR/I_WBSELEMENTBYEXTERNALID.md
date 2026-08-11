---
name: I_WBSELEMENTBYEXTERNALID
description: "WBSElement By ExternalID"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value
semantic_en: "WBSElement By ExternalID"
semantic_vi: "WBSElement By ExternalID — CDS view giao diện (transactional data) dựa trên prps."
keywords:
  - "wbselement"
  - "externalid"
  - "element"
  - "external"
  - "internal"
  - "description"
  - "company"
  - "code"
  - "controlling"
  - "area"
tags:
  - PPM
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - bo:project
---
# I_WBSELEMENTBYEXTERNALID

**WBSElement By ExternalID**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementExternalID` | ✓ | |  | `posid_edit` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementInternalID` |  | |  | `cast ( prps.pspnr as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `WBSDescription` |  | |  | `cast ( prps.post1 as ps_s4_post1 preserving type )` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `CompanyCode` |  | |  | `cast ( prps.pbukr as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  | `cast ( prps.pkokr as ps_s4_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  | `cast ( prps.func_area as fkber preserving type )` | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  | `cast ( prps.fkstl as ps_s4_fkstl preserving type )` | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  | `cast ( prps.fabkl as stkal preserving type )` | `CHAR(2)` | Calendar |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `CostCenter` |  | |  | `cast ( prps.kostl as ps_kostl preserving type )` | `CHAR(10)` | Cost center to which costs are actually posted |
| `ProjectInternalID` |  | |  | `cast ( prps.psphi as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `WBSElementIsBillingElement` |  | |  | `cast ( prps.fakkz as ps_fakkz preserving type )` | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `ProjectType` |  | |  | `prart` | `CHAR(2)` | Project Type |
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `_Project` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ResponsibleCostCenter` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProjectType` | | ✓ | | | | |
| `_ProjectTypeText` | | ✓ | | | | |
| `_FinWBSElementHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_ProjectBasicData` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ResponsibleCostCenter` | `I_CostCenter` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProjectType` | `I_Projecttype` | [0..1] |
| `_ProjectTypeText` | `I_Projecttypetext` | [0..*] |
| `_FinWBSElementHierarchyNode` | `I_FinWBSElementHierarchyNode` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBYEXTERNALID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWBSELEBYEXTKEY'
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #DIMENSION }

@EndUserText.label: 'WBSElement By ExternalID'

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
    //Keys
   // semanticKey: [ 'WBSElement' ],
    representativeKey: 'WBSElementExternalID',

    usageType: {
        serviceQuality: #B,
        sizeCategory : #XL,
        dataClass: #TRANSACTIONAL
    },

    supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}


//Note :  To be used only in Analytical views(cube or consumption views), where Foreign-Key associations
// are needed on WBSElementExternalID. For all other cases and associations, use I_WBSElementBasicData.



define view I_WBSElementByExternalID
  as select from    prps
    left outer join prte on  prps.pspnr = prte.posnr
                         and prps.psphi = prte.psphi

  association [1..1] to I_ProjectBasicData          as _Project                 on  $projection.ProjectInternalID = _Project.ProjectInternalID
  association [0..1] to I_CompanyCode               as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea           as _ControllingArea         on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FunctionalArea            as _FunctionalArea          on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_ProfitCenter              as _ProfitCenter            on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                as _ResponsibleCostCenter   on  $projection.ControllingArea       = _ResponsibleCostCenter.ControllingArea
                                                                                and $projection.ResponsibleCostCenter = _ResponsibleCostCenter.CostCenter
  association [0..1] to I_Plant                     as _Plant                   on  $projection.Plant = _Plant.Plant
  association [0..1] to I_FactoryCalendar           as _FactoryCalendar         on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  //  association [0..*] to I_CostingSheetProcedure as _CostingSheetProcedure on $projection.CostingSheet = _CostingSheetProcedure.CostingSheetProcedure
  association [0..*] to I_CostCenter                as _CostCenter              on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_Projecttype               as _ProjectType             on  $projection.ProjectType = _ProjectType.ProjectType
  association [0..*] to I_Projecttypetext           as _ProjectTypeText         on  $projection.ProjectType = _ProjectTypeText.ProjectType
  association [0..*] to I_FinWBSElementHierarchyNode    as _FinWBSElementHierarchyNode    on  $projection.WBSElementExternalID = _FinWBSElementHierarchyNode.WBSElementExternalID  
{
      @ObjectModel.text.element: 'WBSDescription'
      @ObjectModel.hierarchy.association: '_FinWBSElementHierarchyNode'
  key prps.posid_edit                                    as WBSElementExternalID,

      cast ( prps.pspnr as ps_s4_pspnr preserving type ) as WBSElementInternalID,

      @Semantics.text: true
      cast ( prps.post1 as ps_s4_post1 preserving type ) as WBSDescription,

      //Organizational fields
      //--[ GENERATED:012:GFBfhyK17jY4hilWz{vTHm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( prps.pbukr as bukrs preserving type )       as CompanyCode,

      //--[ GENERATED:012:GFBfhyK17jY4hilWz{vTHm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast ( prps.pkokr as ps_s4_kokrs preserving type ) as ControllingArea,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      cast ( prps.func_area as fkber preserving type )   as FunctionalArea,

      //--[ GENERATED:012:GFBfhyK17jY4hilWz{vTHm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prps.prctr                                         as ProfitCenter,

      //--[ GENERATED:012:GFBfhyK17jY4hilWz{vTHm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ResponsibleCostCenter'
      cast ( prps.fkstl as ps_s4_fkstl preserving type ) as ResponsibleCostCenter,

      @ObjectModel.foreignKey.association: '_Plant'
      prps.werks                                         as Plant,

      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast ( prps.fabkl as stkal preserving type )       as FactoryCalendar,

      //      @ObjectModel.foreignKey.association: '_CostingSheetProcedure'
      prps.kalsm                                         as CostingSheet,

      //--[ GENERATED:012:GFBfhyK17jY4hilWz{vTHm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CostCenter'
      cast ( prps.kostl as ps_kostl preserving type )    as CostCenter,


      //Dimensions
      @ObjectModel.foreignKey.association: '_Project'
      //cast ( prps.psphi as ps_psphi preserving type )    as ProjectInternalID,
      cast ( prps.psphi as ps_s4_proj_pspnr preserving type )    as ProjectInternalID,
      cast ( prps.fakkz as ps_fakkz preserving type )    as WBSElementIsBillingElement,
      prps.objnr                                         as WBSElementObject,
      prps.imprf                                         as InvestmentProfile,
      prps.xstat                                         as WBSIsStatisticalWBSElement,
      @ObjectModel.foreignKey.association: '_ProjectType'
      @ObjectModel.text.association: '_ProjectTypeText'
      prps.prart                                         as ProjectType,
      prps.jibcl                                         as JntIntrstBillgClass,
      prps.jibsa                                         as JntIntrstBillgSubClass,

      //Associations
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _Project,
      _CompanyCode,
      _ControllingArea,
      _FunctionalArea,
      @Consumption.filter.businessDate.at : true
      _ProfitCenter,
      _ResponsibleCostCenter,
      _Plant,
      _FactoryCalendar,
      //      _CostingSheetProcedure,
      _CostCenter,
      _ProjectType,
      _ProjectTypeText,
      _FinWBSElementHierarchyNode
}
```
