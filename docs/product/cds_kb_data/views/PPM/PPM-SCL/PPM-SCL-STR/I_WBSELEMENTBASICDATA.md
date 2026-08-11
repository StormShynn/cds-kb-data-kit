---
name: I_WBSELEMENTBASICDATA
description: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?"
semantic_vi: "WBS Element Basic Data — CDS view giao diện (transactional data) dựa trên prps."
keywords:
  - "wbs"
  - "element"
  - "basic"
  - "data"
  - "internal"
  - "external"
  - "short"
  - "description"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - bo:project
---
# I_WBSELEMENTBASICDATA

**This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a WBS element?**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` | ✓ | |  | `cast ( prps.pspnr as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `posid_edit` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  | `posid` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementShortID` |  | |  | `poski` | `CHAR(16)` | WBS element short identification |
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
| `ProjectInternalID` |  | |  | `cast ( prps.psphi as ps_psphi preserving type )` | `NUMC(8)` | Current number of the appropriate project |
| `WBSElementIsBillingElement` |  | |  | `cast ( prps.fakkz as ps_fakkz preserving type )` | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `WBSIsAccountAssignmentElement` |  | |  | `cast ( prps.belkz as ps_s4_belkz preserving type )` | `CHAR(1)` | Indicator: Account assignment element |
| `ProjectType` |  | |  | `prart` | `CHAR(2)` | Project Type |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `Location` |  | |  | `stort` | `CHAR(10)` | Location |
| `ResultAnalysisInternalID` |  | |  | `abgsl` | `CHAR(6)` | Results Analysis Key |
| `Fund` |  | |  | `rfund` | `CHAR(10)` | Fund |
| `GrantID` |  | |  | `rgrant_nbr` | `CHAR(20)` | Grant |
| `FundIsFixAssigned` |  | |  | `fund_fix_assign` | `CHAR(1)` | Indicator for Fund with Fixed Assignment |
| `FunctionalAreaIsFixAssigned` |  | |  | `func_area_fix_assigned` | `CHAR(1)` | Indicator for Functional Area with Fixed Assignment |
| `GrantIsFixAssigned` |  | |  | `grant_fix_assigned` | `CHAR(1)` | Indicator for Grant with Fixed Assignment |
| `SponsoredProgram` |  | |  | `sponsoredprog` | `CHAR(20)` | Sponsored Program |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalLocation` |  | |  | `tplnr` | `CHAR(30)` | Functional Location |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Date on which object was last changed |
| `RespCostCenterControllingArea` |  | |  | `fkokr` | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `LeadingSalesOrderItem` |  | |  | `posnr_prps` | `NUMC(6)` | Sales Document Item |
| `LeadingSalesOrder` |  | |  | `vbeln_prps` | `CHAR(10)` | Sales Document |
| `EntProjectSettlementElement` |  | |  | `settlementelement` | `CHAR(1)` | Enterprise Project Settlement Element |
| `EntProjIsSettlmtRuleInherited` |  | |  | `settlmtruleinherited` | `CHAR(1)` | Enterprise Project Settlement Rule Inherited |
| `ResultAnalysisDescription` |  | | `_RaKeyVH` | `ResultAnalysisDescription` | `CHAR(60)` | Result Analysis Description |
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
| `_RaKeyVH` | | ✓ | | | | |
| `_WBSElementShortText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_prte` | `prte` | [0..1] |
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
| `_RaKeyVH` | `I_ResultsAnalysisKeyValueHelp` | [0..1] |
| `_WBSElementShortText` | `I_ProjectObjectShortText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATA')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWBSELMNTBSCDATA',
  compiler.compareFilter: true
}

@Analytics: { dataCategory: #DIMENSION }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'WBS Element Basic Data'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true

@Metadata.allowExtensions: true

@ObjectModel: {
    //Keys
    semanticKey: [ 'WBSElement' ],
    representativeKey: 'WBSElementInternalID',

    usageType: {
        serviceQuality: #B,
        sizeCategory : #XL,
        dataClass: #TRANSACTIONAL
    },

    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
}

define view I_WBSElementBasicData
  as select from prps
  association [0..1] to prte                          as _prte                  on  prps.pspnr = _prte.posnr
                                                                                and prps.psphi = _prte.psphi

  association [1..1] to I_ProjectBasicData            as _Project               on  $projection.ProjectInternalID = _Project.ProjectInternalID
  association [0..1] to I_CompanyCode                 as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea             as _ControllingArea       on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FunctionalArea              as _FunctionalArea        on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_ProfitCenter                as _ProfitCenter          on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                  as _ResponsibleCostCenter on  $projection.ControllingArea       = _ResponsibleCostCenter.ControllingArea
                                                                                and $projection.ResponsibleCostCenter = _ResponsibleCostCenter.CostCenter
  association [0..1] to I_Plant                       as _Plant                 on  $projection.Plant = _Plant.Plant
  association [0..1] to I_FactoryCalendar             as _FactoryCalendar       on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  //  association [0..*] to I_CostingSheetProcedure as _CostingSheetProcedure on $projection.CostingSheet = _CostingSheetProcedure.CostingSheetProcedure
  association [0..*] to I_CostCenter                  as _CostCenter            on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_Projecttype                 as _ProjectType           on  $projection.ProjectType = _ProjectType.ProjectType
  association [0..*] to I_Projecttypetext             as _ProjectTypeText       on  $projection.ProjectType = _ProjectTypeText.ProjectType

  //CE2111-RA key description
  association [0..1] to I_ResultsAnalysisKeyValueHelp as _RaKeyVH               on  $projection.ResultAnalysisInternalID = _RaKeyVH.ResultAnalysisInternalID
 // Multilanguage Short text 
  association [0..1] to I_ProjectObjectShortText     as _WBSElementShortText        on  _WBSElementShortText.Language   = $session.system_language
                                                                                    and _WBSElementShortText.ProjectApplicationIdentifier = 'PS'
                                                                                    and _WBSElementShortText.ProjectObjectType = 'PR'
                                                                                    and $projection.WBSElementObject = _WBSElementShortText.ProjectObjectNode
  
{

  key cast ( prps.pspnr as ps_s4_pspnr preserving type ) as WBSElementInternalID,
      @ObjectModel.text.element: 'WBSDescription'
      prps.posid_edit                                    as WBSElementExternalID,
      @ObjectModel.text.element: 'WBSDescription'
      prps.posid                                         as WBSElement,
      prps.poski                                         as WBSElementShortID,
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

      //  _Project.ProjectObject,
      //Dimensions
      // @ObjectModel.foreignKey.association: '_Project'
      cast ( prps.psphi as ps_psphi preserving type )    as ProjectInternalID,
      cast ( prps.fakkz as ps_fakkz preserving type )    as WBSElementIsBillingElement,
      prps.objnr                                         as WBSElementObject,
      prps.imprf                                         as InvestmentProfile,
      prps.xstat                                         as WBSIsStatisticalWBSElement,
      cast ( prps.belkz as ps_s4_belkz preserving type ) as WBSIsAccountAssignmentElement,
      @ObjectModel.foreignKey.association: '_ProjectType'
      @ObjectModel.text.association: '_ProjectTypeText'
      prps.prart                                         as ProjectType,
      //Joint venture fields
      prps.vname                                         as JointVenture,
      prps.recid                                         as JointVentureCostRecoveryCode,
      prps.etype                                         as JointVentureEquityType,
      prps.otype                                         as JntVntrProjectType,
      prps.jibcl                                         as JntIntrstBillgClass,
      prps.jibsa                                         as JntIntrstBillgSubClass,
      prps.stort                                         as Location,
      prps.abgsl                                         as ResultAnalysisInternalID,
      //Public Sector fields
      prps.rfund                                         as Fund,
      prps.rgrant_nbr                                    as GrantID,
      prps.fund_fix_assign                               as FundIsFixAssigned,
      prps.func_area_fix_assigned                        as FunctionalAreaIsFixAssigned,
      prps.grant_fix_assigned                            as GrantIsFixAssigned,
      //2008 new  public sector field
      prps.sponsoredprog                                 as SponsoredProgram,
      //Tax Jurisdiction, Functional Location fields
      prps.txjcd                                         as TaxJurisdiction,
      prps.tplnr                                         as FunctionalLocation,
      @Semantics.user.createdBy: true
      prps.ernam                                         as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      prps.erdat                                         as CreationDate,
      @Semantics.user.lastChangedBy: true
      prps.aenam                                         as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      prps.aedat                                         as LastChangeDate,

      prps.fkokr                                         as RespCostCenterControllingArea,
      prps.posnr_prps                                    as LeadingSalesOrderItem,
      prps.vbeln_prps                                    as LeadingSalesOrder,
      //CE2208-Hierarchy Settlement 
      prps.settlementelement                             as EntProjectSettlementElement, 
      prps.settlmtruleinherited                          as EntProjIsSettlmtRuleInherited,
          
      //CE2111-RA key description
      _RaKeyVH.ResultAnalysisDescription                 as ResultAnalysisDescription,

      //Associations
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _Project,
      _CompanyCode,
      _ControllingArea,
      _FunctionalArea,
      _ProfitCenter,
      _ResponsibleCostCenter,
      _Plant,
      _FactoryCalendar,
      //      _CostingSheetProcedure,
      _CostCenter,
      _ProjectType,
      _ProjectTypeText,
      _RaKeyVH,
      _WBSElementShortText 
}
```
