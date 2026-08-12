---
name: I_WBSELEMENTDATA
description: "WBSElement Data"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value
semantic_en: "WBSElement Data"
semantic_vi: "WBSElement Data — CDS view giao diện (master data) dựa trên prps."
keywords:
  - "wbselement"
  - "data"
  - "element"
  - "internal"
  - "external"
  - "short"
  - "description"
tags:
  - PPM
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - bo:project
---
# I_WBSELEMENTDATA

**WBSElement Data**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` | ✓ | |  | `cast ( prps.pspnr as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `posid_edit` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElement` |  | |  | `cast ( prps.posid as ps_posid_edit preserving type )` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementShortID` |  | |  | `poski` | `CHAR(16)` | WBS element short identification |
| `WBSDescription` |  | |  | `cast ( prps.post1 as ps_s4_post1 preserving type )` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ResponsiblePerson` |  | |  | `cast ( prps.vernr as ps_s4_vernr preserving type )` | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  | `cast ( prps.verna as ps_s4_verna preserving type )` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  | `cast ( prps.astnr as ps_s4_astnr preserving type )` | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  | `astna` | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  | `cast ( prps.pbukr as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `cast ( prps.pgsbr as gsber preserving type )` | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  | `cast ( prps.pkokr as ps_s4_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  | `cast ( prps.func_area as fkber preserving type )` | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ResponsibleCostCenter` |  | |  | `cast ( prps.fkstl as ps_s4_fkstl preserving type )` | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `FreeDefinedTableFieldSemantic` |  | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `FactoryCalendar` |  | |  | `cast ( prps.fabkl as stkal preserving type )` | `CHAR(2)` | Calendar |
| `PriorityCode` |  | |  | `cast ( prps.pspri as nw_prio preserving type )` | `CHAR(1)` | Priority |
| `Currency` |  | |  | `cast ( prps.pwpos as ps_pwpos preserving type )` | `CUKY(5)` | WBS element currency |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `CostCenter` |  | |  | `cast ( prps.kostl as ps_kostl preserving type )` | `CHAR(10)` | Cost center to which costs are actually posted |
| `RequestingCostCenter` |  | |  | `cast ( prps.akstl as ps_s4_akstl preserving type )` | `CHAR(10)` | Requesting cost center |
| `ProjectInternalID` |  | |  | `cast ( prps.psphi as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `WBSElementIsBillingElement` |  | |  | `cast ( prps.fakkz as ps_fakkz preserving type )` | `CHAR(1)` | Indicator: Billing element |
| `WBSElementObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `WBSIsAccountAssignmentElement` |  | |  | `cast ( prps.belkz as ps_s4_belkz preserving type )` | `CHAR(1)` | Indicator: Account assignment element |
| `ProjectType` |  | |  | `prart` | `CHAR(2)` | Project Type |
| `WBSElementIsPlanningElement` |  | |  | `cast ( prps.plakz as ps_plakz preserving type )` | `CHAR(1)` | Indicator: Planning element |
| `WorkCenterLocation` |  | |  | `stort` | `CHAR(10)` | Location |
| `ResultAnalysisInternalID` |  | |  | `abgsl` | `CHAR(6)` | Results Analysis Key |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `FunctionalLocation` |  | |  | `cast ( prps.tplnr as tplnr_unconverted preserving type )` | `CHAR(30)` | Functional location |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Date on which object was last changed |
| `RespCostCenterControllingArea` |  | |  | `fkokr` | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `WBSIsMarkedForIntegratedPlng` |  | |  | `cast ( prps.plint as plint_t preserving type )` | `CHAR(1)` | Indicator 'Integrated Planning' for Cost Object Category |
| `Equipment` |  | |  | `equnr` | `CHAR(18)` | Equipment Number |
| `ProjectObjectChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `WBSElementHierarchyLevel` |  | |  | `stufe` | `INT1(3)` | Level in Project Hierarchy |
| `OverheadCode` |  | |  | `cast ( prps.zschl as fin_ovhkey preserving type )` | `CHAR(6)` | Overhead Key |
| `ReferenceElement` |  | |  | `cast ( prps.adpsp as ps_s4_addcompare_core preserving type )` | `CHAR(40)` | Reference Element PM/PS |
| `ProjInterestCalcProfile` |  | |  | `zschm` | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `ProgressAnlysAggregationWeight` |  | |  | `cast ( prps.evgew as ev_weightd preserving type )` | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `ReqgCostCenterControllingArea` |  | |  | `akokr` | `CHAR(4)` | Controlling area of requesting cost center |
| `Language` |  | |  | `txtsp` | `LANG(1)` | Language Key |
| `IsMarkedForDeletion` |  | |  | `cast( prps.loevm as ps_s4_loevm )` | `CHAR(1)` | Deletion Indicator |
| `WBSElementIsGroupingWBSElement` |  | |  | `grpkz` | `CHAR(1)` | Indicator: Grouping WBS element |
| `WBSElementIsUsedInProjSmmry` |  | |  | `clasf` | `CHAR(1)` | Indicator: WBS element used in project summarization |
| `CostingVariant` |  | |  | `klvar` | `CHAR(4)` | Costing Variant |
| `BasicStartDate` |  | |  | `cast ( pstrt as ps_s4_pstrt preserving type )` | `DATS(8)` | WBS element: Basic start date |
| `ForecastedStartDate` |  | |  | `cast ( estrt as ps_s4_estrt preserving type )` | `DATS(8)` | Forecast Start Date of WBS Element |
| `ActualStartDate` |  | |  | `cast ( istrt as ps_s4_istrt preserving type )` | `DATS(8)` | Actual start date for the WBS element |
| `BasicEndDate` |  | |  | `cast ( pende as ps_s4_pende preserving type )` | `DATS(8)` | WBS element: Basic finish date |
| `ForecastedEndDate` |  | |  | `cast ( eende as ps_s4_eende preserving type )` | `DATS(8)` | Forecast Finish Date of WBS Element |
| `ActualEndDate` |  | |  | `cast ( iende as ps_s4_iende preserving type )` | `DATS(8)` | Actual finish date of the WBS element |
| `BasicDuration` |  | |  | `cast ( pdaur as ps_s4_pdaur preserving type )` | `QUAN(5)` | Length (duration) of the basic dates in the WBS element |
| `BasicDurationUnit` |  | |  | `cast ( peinh as ps_s4_peinh preserving type )` | `UNIT(3)` | Unit for duration of basic WBS element dates |
| `ForecastedDuration` |  | |  | `cast( edaur as ps_s4_edaur preserving type )` | `QUAN(5)` | Forecasted length (duration) of the WBS element |
| `ForecastedDurationUnit` |  | |  | `cast ( eeinh as ps_s4_eeinh preserving type )` | `UNIT(3)` | Unit for duration of WBS element planned dates |
| `ActualDuration` |  | |  | `cast ( idaur as ps_s4_idaur preserving type )` | `QUAN(5)` | Actual length (duration) of the WBS element |
| `ActualDurationUnit` |  | |  | `cast ( ieinh as ps_ieinh preserving type )` | `UNIT(3)` | Unit for duration of actual WBS element dates |
| `SchedldBasicEarliestStartDate` |  | |  | `cast ( pstrm as ps_gstrs preserving type )` | `DATS(8)` | Earliest scheduled start date (Basic) |
| `ScheduledBasicLatestEndDate` |  | |  | `cast ( petrm as ps_s4_gltrs preserving type )` | `DATS(8)` | Latest scheduled finish date (basic) |
| `SchedldFcstdEarliestStartDate` |  | |  | `cast ( estrm as ps_s4_gstpp preserving type )` | `DATS(8)` | Scheduled start date (Forecast) |
| `LatestSchedldFcstdEndDate` |  | |  | `cast ( eetrm as ps_s4_gltpp preserving type )` | `DATS(8)` | Latest scheduled  finish date (Forecast) |
| `TentativeActualStartDate` |  | |  | `cast ( vistr as ps_s4_istvorl preserving type )` | `DATS(8)` | Tentative actual start date for WBS element |
| `TentativeActualEndDate` |  | |  | `cast ( viend as ps_s4_ienvorl preserving type )` | `DATS(8)` | Tentative actual finish date for WBS element |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `SubProject` |  | |  | `subpr` | `CHAR(12)` | Sub-project in work breakdown structure |
| `InvestmentReason` |  | |  | `izwek` | `CHAR(2)` | Reason for Investment |
| `InvestmentScale` |  | |  | `isize` | `CHAR(2)` | Scale of investment objects |
| `EnvironmentalInvestmentReason` |  | |  | `iumkz` | `CHAR(5)` | Reason for Environmental Investment |
| `RequestingCompanyCode` |  | |  | `abukr` | `CHAR(4)` | Requesting company code |
| `NetworkAssignmentType` |  | |  | `zuord` | `NUMC(1)` | Network assignment |
| `CostObject` |  | |  | `ktrg` | `CHAR(12)` | Cost Object |
| `BillingPlan` |  | |  | `fplnr` | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `ControllingObjectClass` |  | |  | `cast ( prps.scope as ps_s4_scope_cv )` | `CHAR(2)` | Object Class |
| `FreeDefinedAttribute01` |  | |  | `cast ( prps.usr00 as usr00prps preserving type )` | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  | `cast ( prps.usr01 as usr01prps preserving type )` | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  | `cast ( prps.usr02 as usr02prps preserving type )` | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  | `cast ( prps.usr03 as usr03prps preserving type )` | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedQuantity1` |  | |  | `cast ( prps.usr04 as usr04prps preserving type )` | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) WBS element |
| `FreeDefinedQuantity1Unit` |  | |  | `cast ( prps.use04 as use04prps preserving type )` | `UNIT(3)` | 1st user defined field for quantity field unit - WBS element |
| `FreeDefinedQuantity2` |  | |  | `cast ( prps.usr05 as usr05prps preserving type )` | `QUAN(13)` | 2nd use field for quantity (length 10,3) WBS element |
| `FreeDefinedQuantity2Unit` |  | |  | `cast ( prps.use05 as use05prps preserving type )` | `UNIT(3)` | 2nd user defined field for quantity field unit - WBS element |
| `FreeDefinedAmount1` |  | |  | `cast ( prps.usr06 as abap.curr( 13, 2 ) )` | `CURR(13)` |  |
| `FreeDefinedAmount1Currency` |  | |  | `cast ( prps.use06 as use06prps preserving type )` | `CUKY(5)` | 1st user defined field for value field unit - WBS element |
| `FreeDefinedAmount2` |  | |  | `cast ( prps.usr07 as abap.curr( 13, 2 ) )` | `CURR(13)` |  |
| `FreeDefinedAmount2Currency` |  | |  | `cast ( prps.use07 as use07prps preserving type )` | `CUKY(5)` | 2nd user defined field for value field unit - WBS element |
| `FreeDefinedDate1` |  | |  | `cast ( prps.usr08 as usr08prps preserving type )` | `DATS(8)` | 1st user field for date -WBS element |
| `FreeDefinedDate2` |  | |  | `cast ( prps.usr09 as usr09prps preserving type )` | `DATS(8)` | 2nd user field for date -WBS element |
| `FreeDefinedIndicator1` |  | |  | `cast ( prps.usr10 as usr10prps preserving type )` | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  | `cast ( prps.usr11 as usr11prps preserving type )` | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `_Project` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ResponsibleCostCenter` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_WBSElementShortText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_ProjectData` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ResponsibleCostCenter` | `I_CostCenter` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_WBSElementShortText` | `I_ProjectObjectShortText` | [0..1] |
| `_Extension` | `E_WBSElement_2` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTDATA')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWBSELMNTDATA',
  compiler.compareFilter: true
}
@Analytics: {
      dataCategory: #DIMENSION,
      internalName: #LOCAL,
      dataExtraction : {
        enabled: true,
        delta:{
          changeDataCapture: {
            mapping: [
                { table: 'PRPS',
                  role: #MAIN,
                  viewElement: 'WBSElementInternalID',
                  tableElement: 'PSPNR'
                 },
                {
                  table: 'PRTE',
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  viewElement:  'WBSElementInternalID',
                  tableElement: 'POSNR'
                }
             ]
           }
         }
       }
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'WBSElement Data'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_WBSElementData_2'

@Metadata.allowExtensions: true

@ObjectModel: {
    //Keys
    semanticKey: [ 'WBSElement' ],
    representativeKey: 'WBSElementInternalID',

    usageType: {
        serviceQuality: #B,
        sizeCategory : #XL,
        dataClass: #MASTER
    },

    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
}

define view I_WBSElementData
as select from prps
left outer to one join prte
    on prps.pspnr = prte.posnr and prps.psphi = prte.psphi

  association [1..1] to I_ProjectData      as _Project               on  $projection.ProjectInternalID = _Project.ProjectInternalID
  association [0..1] to I_CompanyCode      as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea  as _ControllingArea       on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FunctionalArea   as _FunctionalArea        on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_ProfitCenter     as _ProfitCenter          on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                     and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter       as _ResponsibleCostCenter on  $projection.ControllingArea       = _ResponsibleCostCenter.ControllingArea
                                                                     and $projection.ResponsibleCostCenter = _ResponsibleCostCenter.CostCenter
  association [0..1] to I_Plant            as _Plant                 on  $projection.Plant = _Plant.Plant
  association [0..1] to I_FactoryCalendar  as _FactoryCalendar       on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..*] to I_CostCenter       as _CostCenter            on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                     and $projection.CostCenter      = _CostCenter.CostCenter
   // Multilanguage Short text 
 association [0..1] to I_ProjectObjectShortText     as _WBSElementShortText       on  _WBSElementShortText.Language   = $session.system_language
                                                                                  and _WBSElementShortText.ProjectApplicationIdentifier = 'PS'
                                                                                  and _WBSElementShortText  .ProjectObjectType = 'PR'
                                                                                  and $projection.WBSElementObject = _WBSElementShortText.ProjectObjectNode
   ---Extension Association
  association [1..1] to E_WBSElement_2 as _Extension on $projection.WBSElementInternalID = _Extension.WBSElementInternalID
{
     key cast ( prps.pspnr as ps_s4_pspnr preserving type )                    as WBSElementInternalID,
      @ObjectModel.text.element: 'WBSDescription'
      prps.posid_edit                                                          as WBSElementExternalID,
      @ObjectModel.text.element: 'WBSDescription'
      cast ( prps.posid as ps_posid_edit preserving type )                     as WBSElement,
      prps.poski                                                               as WBSElementShortID,
      @Semantics.text: true
      cast ( prps.post1 as ps_s4_post1 preserving type )                       as WBSDescription,

      cast ( prps.vernr as ps_s4_vernr preserving type )                       as ResponsiblePerson,
      cast ( prps.verna as ps_s4_verna preserving type )                       as ResponsiblePersonName,
      cast ( prps.astnr as ps_s4_astnr preserving type )                       as ApplicantCode,
      prps.astna                                                               as ApplicantName,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( prps.pbukr as bukrs preserving type )                             as CompanyCode,
      cast ( prps.pgsbr as gsber preserving type )                             as BusinessArea,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast ( prps.pkokr as ps_s4_kokrs preserving type ) as ControllingArea,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      cast ( prps.func_area as fkber preserving type )                         as FunctionalArea,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prps.prctr                                                               as ProfitCenter,

      @ObjectModel.foreignKey.association: '_ResponsibleCostCenter'
      cast ( prps.fkstl as ps_s4_fkstl preserving type )                       as ResponsibleCostCenter,

      @ObjectModel.foreignKey.association: '_Plant'
      prps.werks                                                               as Plant,
      prps.slwid                                                               as FreeDefinedTableFieldSemantic,

      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast ( prps.fabkl as stkal preserving type )                             as FactoryCalendar,
      cast ( prps.pspri as nw_prio preserving type )                           as PriorityCode,
      cast ( prps.pwpos as ps_pwpos preserving type )                          as Currency,

      //      @ObjectModel.foreignKey.association: '_CostingSheetProcedure'
      prps.kalsm                                                               as CostingSheet,

      @ObjectModel.foreignKey.association: '_CostCenter'
      cast ( prps.kostl as ps_kostl preserving type )                          as CostCenter,
      cast ( prps.akstl as ps_s4_akstl preserving type )                       as RequestingCostCenter,

      //  _Project.ProjectObject,
      //Dimensions
      @ObjectModel.foreignKey.association: '_Project'
      cast ( prps.psphi as ps_s4_proj_pspnr preserving type )                  as ProjectInternalID,
      cast ( prps.fakkz as ps_fakkz preserving type )                          as WBSElementIsBillingElement,
      prps.objnr                                                               as WBSElementObject,
      prps.imprf                                                               as InvestmentProfile,
      prps.xstat                                                               as WBSIsStatisticalWBSElement,
      cast ( prps.belkz as ps_s4_belkz preserving type )                       as WBSIsAccountAssignmentElement,
      prps.prart                                                               as ProjectType,
      cast ( prps.plakz as ps_plakz preserving type )                          as WBSElementIsPlanningElement,
      prps.stort                                                               as WorkCenterLocation,
      prps.abgsl                                                               as ResultAnalysisInternalID,
      //Tax Jurisdiction, Functional Location fields
      prps.txjcd                                                               as TaxJurisdiction,
      cast ( prps.tplnr as tplnr_unconverted preserving type )                 as FunctionalLocation,
      @Semantics.user.createdBy: true
      prps.ernam                                                               as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      prps.erdat                                                               as CreationDate,
      @Semantics.user.lastChangedBy: true
      prps.aenam                                                               as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      prps.aedat                                                               as LastChangeDate,

      prps.fkokr                                                               as RespCostCenterControllingArea,

      cast ( prps.plint as plint_t preserving type )                           as WBSIsMarkedForIntegratedPlng,
      prps.equnr                                                               as Equipment,
      prps.aennr                                                               as ProjectObjectChangeNumber,
      prps.stufe                                                               as WBSElementHierarchyLevel,
      cast ( prps.zschl as fin_ovhkey preserving type )                        as OverheadCode,
      cast ( prps.adpsp as ps_s4_addcompare_core preserving type )             as ReferenceElement,
      prps.zschm                                                               as ProjInterestCalcProfile,
      cast ( prps.evgew as ev_weightd preserving type )                        as ProgressAnlysAggregationWeight,

      prps.akokr                                                               as ReqgCostCenterControllingArea,
      prps.txtsp                                                               as Language,
      cast( prps.loevm as ps_s4_loevm )                                        as IsMarkedForDeletion,
      @Semantics.booleanIndicator: true
      prps.grpkz                                                               as WBSElementIsGroupingWBSElement,
      prps.clasf                                                               as WBSElementIsUsedInProjSmmry,
      prps.klvar                                                               as CostingVariant,

      cast ( pstrt as ps_s4_pstrt preserving type )                            as BasicStartDate,
      cast ( estrt as ps_s4_estrt preserving type )                            as ForecastedStartDate,
      cast ( istrt as ps_s4_istrt preserving type )                            as ActualStartDate,
      cast ( pende as ps_s4_pende preserving type )                            as BasicEndDate,
      cast ( eende as ps_s4_eende preserving type )                            as ForecastedEndDate,
      cast ( iende as ps_s4_iende preserving type )                            as ActualEndDate,

      @Semantics.quantity.unitOfMeasure: 'BasicDurationUnit'
      cast ( pdaur as ps_s4_pdaur preserving type )                            as BasicDuration,
      @Semantics.unitOfMeasure: true
      cast ( peinh as ps_s4_peinh preserving type )                            as BasicDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ForecastedDurationUnit'
      cast( edaur as ps_s4_edaur preserving type )                             as ForecastedDuration,
      @Semantics.unitOfMeasure: true
      cast ( eeinh as ps_s4_eeinh preserving type )                            as ForecastedDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'ActualDurationUnit'
      cast ( idaur as ps_s4_idaur preserving type )                            as ActualDuration,
      @Semantics.unitOfMeasure: true
      cast ( ieinh as ps_ieinh preserving type )                               as ActualDurationUnit,

      cast ( pstrm as ps_gstrs preserving type )                               as SchedldBasicEarliestStartDate,
      cast ( petrm as ps_s4_gltrs preserving type )                            as ScheduledBasicLatestEndDate,
      cast ( estrm as ps_s4_gstpp preserving type )                            as SchedldFcstdEarliestStartDate,
      cast ( eetrm as ps_s4_gltpp preserving type )                            as LatestSchedldFcstdEndDate,
      cast ( vistr as ps_s4_istvorl preserving type )                          as TentativeActualStartDate,
      cast ( viend as ps_s4_ienvorl preserving type )                          as TentativeActualEndDate,

      //Joint venture fields
      prps.vname                                                               as JointVenture,
      prps.recid                                                               as JointVentureCostRecoveryCode,
      prps.etype                                                               as JointVentureEquityType,
      prps.otype                                                               as JntVntrProjectType,
      prps.jibcl                                                               as JntIntrstBillgClass,
      prps.jibsa                                                               as JntIntrstBillgSubClass,

      prps.subpr                                                               as SubProject,
      prps.izwek                                                               as InvestmentReason,
      prps.isize                                                               as InvestmentScale,
      prps.iumkz                                                               as EnvironmentalInvestmentReason,

      prps.abukr                                                               as RequestingCompanyCode,
      prps.zuord                                                               as NetworkAssignmentType,
      prps.ktrg                                                                as CostObject,
      prps.fplnr                                                               as BillingPlan,
      cast ( prps.scope as ps_s4_scope_cv )                                    as ControllingObjectClass,

      cast ( prps.usr00 as usr00prps preserving type )                         as FreeDefinedAttribute01,
      cast ( prps.usr01 as usr01prps preserving type )                         as FreeDefinedAttribute02,
      cast ( prps.usr02 as usr02prps preserving type )                         as FreeDefinedAttribute03,
      cast ( prps.usr03 as usr03prps preserving type )                         as FreeDefinedAttribute04,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity1Unit'
      cast ( prps.usr04 as usr04prps preserving type )                         as FreeDefinedQuantity1,
      cast ( prps.use04 as use04prps preserving type )                         as FreeDefinedQuantity1Unit,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity2Unit'
      cast ( prps.usr05 as usr05prps preserving type )                         as FreeDefinedQuantity2,
      cast ( prps.use05 as use05prps preserving type )                         as FreeDefinedQuantity2Unit,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency'
      cast ( prps.usr06 as abap.curr( 13, 2 ) )                                as FreeDefinedAmount1,
      cast ( prps.use06 as use06prps preserving type )                         as FreeDefinedAmount1Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      cast ( prps.usr07 as abap.curr( 13, 2 ) )                                as FreeDefinedAmount2,
      cast ( prps.use07 as use07prps preserving type )                         as FreeDefinedAmount2Currency,
      cast ( prps.usr08 as usr08prps preserving type )                         as FreeDefinedDate1,
      cast ( prps.usr09 as usr09prps preserving type )                         as FreeDefinedDate2,
      cast ( prps.usr10 as usr10prps preserving type )                         as FreeDefinedIndicator1,
      cast ( prps.usr11 as usr11prps preserving type )                         as FreeDefinedIndicator2,
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
      // Multilanguage Short text 
      _WBSElementShortText
}
```
