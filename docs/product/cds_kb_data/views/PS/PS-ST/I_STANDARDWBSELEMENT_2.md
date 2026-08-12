---
name: I_STANDARDWBSELEMENT_2
description: "Standard WBS Element Details"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value
semantic_en: "Standard WBS Element Details"
semantic_vi: "Standard WBS Element Details — CDS view giao diện dựa trên prpss."
keywords:
  - "standard"
  - "wbs"
  - "element"
  - "details"
  - "internal"
  - "project"
  - "description"
  - "object"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - PS-ST
---
# I_STANDARDWBSELEMENT_2

**Standard WBS Element Details**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StandardWBSElementInternalID` | ✓ | |  | `cast ( prpss.pspnr as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `StdWBSElement` |  | |  | `cast ( prpss.posid as ps_s4_posid preserving type )` | `CHAR(24)` | WBS Element |
| `StandardProjectInternalID` |  | |  | `cast ( prpss.psphi as ps_s4_ispsp preserving type )` | `NUMC(8)` | Current number for standard project |
| `StdWBSDescription` |  | |  | `case when _StdWBSElementShortText.LanguageBasedShortText is not initial then _StdWBSElementShortText.LanguageBasedShortText else cast ( prpss.post1 as ps_s4_post1 preserving type ) end` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `StandardWBSElementObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  | `cast ( prpss.ernam as ernam preserving type )` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `cast ( prpss.erdat as erdat preserving type )` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `cast ( prpss.aenam as ps_s4_aenam preserving type )` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `cast ( prpss.aedat as ps_s4_updat preserving type )` | `DATS(8)` | Date on which object was last changed |
| `ResponsiblePerson` |  | |  | `cast ( prpss.vernr as ps_s4_vernr preserving type )` | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  | `cast ( prpss.verna as ps_s4_verna preserving type )` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  | `cast ( prpss.astnr as ps_s4_astnr preserving type )` | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  | `astna` | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  | `cast ( prpss.pbukr as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `cast ( prpss.pgsbr as gsber preserving type )` | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  | `cast ( prpss.pkokr as logbr_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ProjectType` |  | |  | `cast ( prpss.prart as ps_s4_prart preserving type )` | `CHAR(2)` | Project type |
| `WBSElementIsPlanningElement` |  | |  | `cast ( prpss.plakz as ps_plakz preserving type )` | `CHAR(1)` | Indicator: Planning element |
| `WBSIsAccountAssignmentElement` |  | |  | `cast ( prpss.belkz as ps_s4_belkz preserving type )` | `CHAR(1)` | Indicator: Account assignment element |
| `WBSElementIsBillingElement` |  | |  | `cast ( prpss.fakkz as ps_fakkz preserving type )` | `CHAR(1)` | Indicator: Billing element |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `RequestingCostCenter` |  | |  | `cast ( prpss.akstl as ps_s4_akstl preserving type )` | `CHAR(10)` | Requesting cost center |
| `ResponsibleCostCenter` |  | |  | `cast ( prpss.fkstl as ps_s4_fkstl preserving type )` | `CHAR(10)` | Responsible Cost Center |
| `FactoryCalendar` |  | |  | `cast ( prpss.fabkl as stkal preserving type )` | `CHAR(2)` | Calendar |
| `PriorityCode` |  | |  | `cast ( prpss.pspri as nw_prio preserving type )` | `CHAR(1)` | Priority |
| `Currency` |  | |  | `cast ( prpss.pwpos as ps_pwpos preserving type )` | `CUKY(5)` | WBS element currency |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `FreeDefinedTableFieldSemantic` |  | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` |  | |  | `cast( prpss.txjcd as ps_s4_txjcd preserving type )` | `CHAR(15)` | Tax Jurisdiction |
| `WBSIsMarkedForIntegratedPlng` |  | |  | `cast ( prpss.plint as plint_t preserving type )` | `CHAR(1)` | Indicator 'Integrated Planning' for Cost Object Category |
| `FunctionalArea` |  | |  | `cast ( prpss.func_area as fkber preserving type )` | `CHAR(16)` | Functional Area |
| `Location` |  | |  | `cast ( prpss.stort as /sapapo/locno )` | `CHAR(20)` | Location |
| `Equipment` |  | |  | `equnr` | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  | `tplnr` | `CHAR(30)` | Functional Location |
| `ProjectObjectChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `ReferenceElement` |  | |  | `cast ( prpss.adpsp as addcompare_core )` | `CHAR(40)` | Reference Element PM/PS |
| `ProjInterestCalcProfile` |  | |  | `zschm` | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `WBSElementHierarchyLevel` |  | |  | `stufe` | `INT1(3)` | Level in Project Hierarchy |
| `OverheadCode` |  | |  | `cast ( prpss.zschl as fin_ovhkey preserving type )` | `CHAR(6)` | Overhead Key |
| `ResultAnalysisInternalID` |  | |  | `cast ( prpss.abgsl as psb_bo_abgr_schl_de preserving type )` | `CHAR(6)` | Results Analysis Key |
| `ProgressAnlysAggregationWeight` |  | |  | `cast ( prpss.evgew as ev_weightd preserving type )` | `DEC(8)` | Aggregation weight for POC (PS progress) |
| `WBSElementShortID` |  | |  | `poski` | `CHAR(16)` | WBS element short identification |
| `ReqgCostCenterControllingArea` |  | |  | `akokr` | `CHAR(4)` | Controlling area of requesting cost center |
| `RespCostCenterControllingArea` |  | |  | `fkokr` | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `Language` |  | |  | `txtsp` | `LANG(1)` | Language Key |
| `CostCenter` |  | |  | `cast ( prpss.kostl as ps_kostl preserving type )` | `CHAR(10)` | Cost center to which costs are actually posted |
| `WBSElementIsUsedInProjSmmry` |  | |  | `clasf` | `CHAR(1)` | Indicator: WBS element used in project summarization |
| `WBSElementIsGroupingWBSElement` |  | |  | `grpkz` | `CHAR(1)` | Indicator: Grouping WBS element |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  | `cast ( prpss.otype as jv_otype preserving type )` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `ControllingObjectClass` |  | |  | `cast ( prpss.scope as ps_s4_scope_cv )` | `CHAR(2)` | Object Class |
| `StdWBSElementWithCodingMask` |  | |  | `posid_edit` | `CHAR(24)` | Standard Work Breakdown Structure (S WBS Element) Edited |
| `FreeDefinedAttribute01` |  | |  | `cast ( prpss.usr00 as usr00prps preserving type )` | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  | `cast ( prpss.usr01 as usr01prps preserving type )` | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  | `cast ( prpss.usr02 as usr02prps preserving type )` | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  | `cast ( prpss.usr03 as usr03prps preserving type )` | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedQuantity1` |  | |  | `cast ( prpss.usr04 as usr04prps preserving type )` | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) WBS element |
| `FreeDefinedQuantity1Unit` |  | |  | `cast ( prpss.use04 as use04prps preserving type )` | `UNIT(3)` | 1st user defined field for quantity field unit - WBS element |
| `FreeDefinedQuantity2` |  | |  | `cast ( prpss.usr05 as usr05prps preserving type )` | `QUAN(13)` | 2nd use field for quantity (length 10,3) WBS element |
| `FreeDefinedQuantity2Unit` |  | |  | `cast ( prpss.use05 as use05prps preserving type )` | `UNIT(3)` | 2nd user defined field for quantity field unit - WBS element |
| `FreeDefinedAmount1` |  | |  | `cast ( prpss.usr06 as usr06prps preserving type )` | `CURR(13)` | 1st user field for values (length 10,3) WBS element |
| `FreeDefinedAmount1Currency` |  | |  | `cast ( prpss.use06 as use06prps preserving type )` | `CUKY(5)` | 1st user defined field for value field unit - WBS element |
| `FreeDefinedAmount2` |  | |  | `cast ( prpss.usr07 as usr07prps preserving type )` | `CURR(13)` | 2nd user field for values (length 10,3) -WBS element |
| `FreeDefinedAmount2Currency` |  | |  | `cast ( prpss.use07 as use07prps preserving type )` | `CUKY(5)` | 2nd user defined field for value field unit - WBS element |
| `FreeDefinedDate1` |  | |  | `cast ( prpss.usr08 as usr08prps preserving type )` | `DATS(8)` | 1st user field for date -WBS element |
| `FreeDefinedDate2` |  | |  | `cast ( prpss.usr09 as usr09prps preserving type )` | `DATS(8)` | 2nd user field for date -WBS element |
| `FreeDefinedIndicator1` |  | |  | `cast ( prpss.usr10 as usr10prps preserving type )` | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  | `cast ( prpss.usr11 as usr11prps preserving type )` | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `SubProject` |  | |  | `subpr` | `CHAR(12)` | Sub-project in work breakdown structure |
| `_Project` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_ProjectType` | | ✓ | | | | |
| `_PriorityCode` | | ✓ | | | | |
| `_Location` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_InterestCalculationProfile` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_TaxJurisdiction` | | ✓ | | | | |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |
| `_StdWBSElementShortText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Project` | `I_StandardProject_2` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CostCenter` | `I_CostCenter` | [1..*] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [1..*] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [1..1] |
| `_ProjectType` | `I_Projecttype` | [1..1] |
| `_PriorityCode` | `I_Prioritycode` | [1..1] |
| `_Location` | `I_Location` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_InterestCalculationProfile` | `I_Interestcalculationprofile` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_TaxJurisdiction` | `I_TaxJurisdiction` | [0..1] |
| `_ResponsiblePerson` | `I_ProjectResponsiblePerson` | [0..1] |
| `_ProjectApplicant` | `I_ProjectApplicant` | [0..1] |
| `_StdWBSElementShortText` | `I_ProjectObjectShortText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDWBSELEMENT_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTDWBSELE2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.representativeKey: 'StandardWBSElementInternalID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Standard WBS Element Details'
@Metadata.allowExtensions: true

@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
      dataCategory: #DIMENSION,
      internalName: #LOCAL,
      dataExtraction : {
        enabled: true,
        delta:{
         changeDataCapture:{
           mapping: [
                      { table: 'PRPSS',
                        role: #MAIN,
                        viewElement: ['StandardWBSElementInternalID'],
                        tableElement: ['PSPNR']
                      }          
                    ]
              } 
           }
       }
}

define view I_StandardWBSElement_2 as select from prpss
                                        
  association [1..1] to I_StandardProject_2          as _Project                    on  $projection.StandardProjectInternalID = _Project.StandardProjectInternalID
  association [1..1] to I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..*] to I_CostCenter                 as _CostCenter                 on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                    and $projection.ControllingArea = _CostCenter.ControllingArea
  association [1..1] to I_BusinessArea               as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_Plant                      as _Plant                      on  $projection.Plant = _Plant.Plant
  association [1..*] to I_ProfitCenter               as _ProfitCenter               on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                    and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [1..1] to I_ControllingObjectClass     as _ControllingObjectClass     on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  association [1..1] to I_Projecttype                as _ProjectType                on  $projection.ProjectType = _ProjectType.ProjectType
  association [1..1] to I_Prioritycode               as _PriorityCode               on  $projection.PriorityCode = _PriorityCode.PriorityCode
  association [0..1] to I_Location                   as _Location                   on  $projection.Location = _Location.Location
                                                                                    and $projection.Plant    = _Location.Plant
  association [0..1] to I_Equipment                  as _Equipment                  on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_FunctionalLocation         as _FunctionalLocation         on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_FunctionalArea             as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_Interestcalculationprofile as _InterestCalculationProfile on  $projection.ProjInterestCalcProfile = _InterestCalculationProfile.ProjInterestCalcProfile
  association [0..1] to I_FactoryCalendar            as _FactoryCalendar            on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_TaxJurisdiction            as _TaxJurisdiction            on  $projection.TaxJurisdiction = _TaxJurisdiction.TaxJurisdiction
                                                                                    and $projection.CostingSheet    = _TaxJurisdiction.TaxJurisdictionCalcProcedure
  association [0..1] to I_ProjectResponsiblePerson   as _ResponsiblePerson          on  $projection.ResponsiblePerson = _ResponsiblePerson.ResponsiblePerson
  association [0..1] to I_ProjectApplicant           as _ProjectApplicant           on  $projection.ApplicantCode = _ProjectApplicant.ApplicantCode

  association [0..1] to I_ProjectObjectShortText     as _StdWBSElementShortText     on  _StdWBSElementShortText.Language   = $session.system_language
                                                                                    and _StdWBSElementShortText.ProjectApplicationIdentifier = 'PS'
                                                                                    and _StdWBSElementShortText.ProjectObjectType = 'PT'
                                                                                    and $projection.StandardWBSElementObject = _StdWBSElementShortText.ProjectObjectNode
                                  
{      
  key cast ( prpss.pspnr as ps_s4_pspnr preserving type )                    as StandardWBSElementInternalID,
  
      @ObjectModel.text.element: ['StdWBSDescription']
      cast ( prpss.posid as ps_s4_posid preserving type )                    as StdWBSElement,
      
      cast ( prpss.psphi as ps_s4_ispsp preserving type )                    as StandardProjectInternalID,
   
      @Semantics.text: true
      case
        when _StdWBSElementShortText.LanguageBasedShortText is not initial
        then _StdWBSElementShortText.LanguageBasedShortText
        else cast ( prpss.post1 as ps_s4_post1 preserving type ) 
      end                                                                    as StdWBSDescription,
      
      prpss.objnr                                                            as StandardWBSElementObject,
      @Semantics.user.createdBy: true
      cast ( prpss.ernam as ernam preserving type )                          as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      cast ( prpss.erdat as erdat preserving type )                          as CreationDate,
      @Semantics.user.lastChangedBy: true
      cast ( prpss.aenam as ps_s4_aenam preserving type )                    as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      cast ( prpss.aedat as ps_s4_updat preserving type )                    as LastChangeDate,
      cast ( prpss.vernr as ps_s4_vernr preserving type )                    as ResponsiblePerson,
      cast ( prpss.verna as ps_s4_verna preserving type )                    as ResponsiblePersonName,
      cast ( prpss.astnr as ps_s4_astnr preserving type )                    as ApplicantCode,
      prpss.astna                                                            as ApplicantName,
      cast ( prpss.pbukr as bukrs preserving type )                          as CompanyCode,
      cast ( prpss.pgsbr as gsber preserving type )                          as BusinessArea,
      cast ( prpss.pkokr as logbr_kokrs preserving type )                    as ControllingArea,
      prpss.prctr                                                            as ProfitCenter,
      cast ( prpss.prart as ps_s4_prart preserving type )                    as ProjectType,
      @Semantics.booleanIndicator: true
      cast ( prpss.plakz as ps_plakz preserving type )                       as WBSElementIsPlanningElement,
      @Semantics.booleanIndicator: true
      cast ( prpss.belkz as ps_s4_belkz preserving type )                    as WBSIsAccountAssignmentElement,
      @Semantics.booleanIndicator: true
      cast ( prpss.fakkz as ps_fakkz preserving type )                       as WBSElementIsBillingElement,
      prpss.kalsm                                                            as CostingSheet,
      cast ( prpss.akstl as ps_s4_akstl preserving type )                    as RequestingCostCenter,
      cast ( prpss.fkstl as ps_s4_fkstl preserving type )                    as ResponsibleCostCenter,
      cast ( prpss.fabkl as stkal preserving type )                          as FactoryCalendar,
      cast ( prpss.pspri as nw_prio preserving type )                        as PriorityCode,
      cast ( prpss.pwpos as ps_pwpos preserving type )                       as Currency,
      prpss.werks                                                            as Plant,
      prpss.slwid                                                            as FreeDefinedTableFieldSemantic,
      @Semantics.booleanIndicator: true
      prpss.xstat                                                            as WBSIsStatisticalWBSElement,
      cast( prpss.txjcd as ps_s4_txjcd preserving type )                     as TaxJurisdiction,
      @Semantics.booleanIndicator: true
      cast ( prpss.plint as plint_t preserving type )                        as WBSIsMarkedForIntegratedPlng,
      cast ( prpss.func_area as fkber preserving type )                      as FunctionalArea,
      cast ( prpss.stort as /sapapo/locno )                                  as Location,
      prpss.equnr                                                            as Equipment,
      prpss.tplnr                                                            as FunctionalLocation,
      prpss.aennr                                                            as ProjectObjectChangeNumber,
      cast ( prpss.adpsp as addcompare_core )                                as ReferenceElement,
      prpss.zschm                                                            as ProjInterestCalcProfile,
      prpss.imprf                                                            as InvestmentProfile,
      @EndUserText.label: 'Level'
      prpss.stufe                                                            as WBSElementHierarchyLevel,
      cast ( prpss.zschl as fin_ovhkey preserving type )                     as OverheadCode,
      cast ( prpss.abgsl as psb_bo_abgr_schl_de preserving type )            as ResultAnalysisInternalID,
      cast ( prpss.evgew as ev_weightd preserving type )                     as ProgressAnlysAggregationWeight,
      prpss.poski                                                            as WBSElementShortID,
      prpss.akokr                                                            as ReqgCostCenterControllingArea,
      prpss.fkokr                                                            as RespCostCenterControllingArea,
      prpss.txtsp                                                            as Language,
      cast ( prpss.kostl as ps_kostl preserving type )                       as CostCenter,     
      @Semantics.booleanIndicator: true
      prpss.clasf                                                            as WBSElementIsUsedInProjSmmry,
      @Semantics.booleanIndicator: true
      prpss.grpkz                                                            as WBSElementIsGroupingWBSElement,
      prpss.vname                                                            as JointVenture,
      prpss.recid                                                            as JointVentureRecoveryCode,
      prpss.etype                                                            as JointVentureEquityType,
      cast ( prpss.otype as jv_otype preserving type )                       as JointVentureObjectType,
      prpss.jibcl                                                            as JointVentureClass,
      prpss.jibsa                                                            as JointVentureSubClass,          
      cast ( prpss.scope as ps_s4_scope_cv )                                 as ControllingObjectClass,     
      prpss.posid_edit                                                       as StdWBSElementWithCodingMask,
      
      cast ( prpss.usr00 as usr00prps preserving type )                      as FreeDefinedAttribute01,
      cast ( prpss.usr01 as usr01prps preserving type )                      as FreeDefinedAttribute02,
      cast ( prpss.usr02 as usr02prps preserving type )                      as FreeDefinedAttribute03,
      cast ( prpss.usr03 as usr03prps preserving type )                      as FreeDefinedAttribute04,
      
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity1Unit'
      cast ( prpss.usr04 as usr04prps preserving type )                      as FreeDefinedQuantity1,
      cast ( prpss.use04 as use04prps preserving type )                      as FreeDefinedQuantity1Unit,
      
      @Semantics.quantity.unitOfMeasure: 'FreeDefinedQuantity2Unit'
      cast ( prpss.usr05 as usr05prps preserving type )                      as FreeDefinedQuantity2,
      cast ( prpss.use05 as use05prps preserving type )                      as FreeDefinedQuantity2Unit,
      
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency' 
      cast ( prpss.usr06 as usr06prps preserving type )                      as FreeDefinedAmount1,
      cast ( prpss.use06 as use06prps preserving type )                      as FreeDefinedAmount1Currency,
      
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      cast ( prpss.usr07 as usr07prps preserving type )                      as FreeDefinedAmount2,
      cast ( prpss.use07 as use07prps preserving type )                      as FreeDefinedAmount2Currency,
      
      cast ( prpss.usr08 as usr08prps preserving type )                      as FreeDefinedDate1,
      cast ( prpss.usr09 as usr09prps preserving type )                      as FreeDefinedDate2,
      cast ( prpss.usr10 as usr10prps preserving type )                      as FreeDefinedIndicator1,
      cast ( prpss.usr11 as usr11prps preserving type )                      as FreeDefinedIndicator2,

      prpss.subpr                                                            as SubProject,

      _Project,
      _ControllingArea,
      _Plant,
      _CostCenter,
      _BusinessArea,
      _CompanyCode,
      _ProfitCenter,
      _ControllingObjectClass,
      _ProjectType,
      _PriorityCode,
      _Location,
      _Equipment,
      _FunctionalLocation,
      _FunctionalArea,
      _InterestCalculationProfile,
      _FactoryCalendar,
      _TaxJurisdiction,
      _ResponsiblePerson,
      _ProjectApplicant,
      _StdWBSElementShortText
};
```
