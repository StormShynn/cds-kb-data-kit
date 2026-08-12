---
name: I_PROJECTDATA_2
description: "Appl interface for Project details"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value
semantic_en: "Appl interface for Project details"
semantic_vi: "Appl interface for Project details — CDS view giao diện (master data) dựa trên proj."
keywords:
  - "Appl Interface Project Details"
  - "appl"
  - "interface"
  - "for"
  - "project"
  - "details"
  - "internal"
  - "external"
  - "description"
  - "profile"
  - "code"
tags:
  - PPM
  - bo:project
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
---
# I_PROJECTDATA_2

**Appl interface for Project details**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` | ✓ | |  | `cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  | `pspid_edit` | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  | `cast ( proj.pspid as ps_p_pspid preserving type )` | `CHAR(24)` | Project definition |
| `ProjectDescription` |  | |  | `cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type)` | `CHAR(40)` | Project Name |
| `ProjectProfileCode` |  | |  | `profl` | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  | `cast ( proj.vbukr as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  | `cast ( proj.vkokr as kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  | `cast ( proj.func_area as fkber preserving type )` | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ProjectObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `PlannedStartDate` |  | |  | `plfaz` | `DATS(8)` | Project planned start date |
| `PlannedEndDate` |  | |  | `plsez` | `DATS(8)` | Project planned finish date |
| `WorkCenterLocation` |  | |  | `stort` | `CHAR(10)` | Location |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `ResponsiblePerson` |  | |  | `vernr` | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ResponsiblePersonName` |  | |  | `cast ( proj.verna as ps_s4_verna )` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  | `cast ( proj.astnr as ps_s4_astnr )` | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  | `astna` | `CHAR(25)` | Applicant |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `cast ( proj.aedat as ps_s4_aedat )` | `DATS(8)` | Changed On |
| `BasicDatesLastScheduledDate` |  | |  | `aedte` | `DATS(8)` | Date of last scheduling of the overall network (basic dates) |
| `FcstdDatesLastScheduledDate` |  | |  | `cast ( proj.aedtp as ps_aedtp )` | `DATS(8)` | Date of last scheduling of the overall network (forecast) |
| `FactoryCalendar` |  | |  | `cast ( proj.kalid as appca )` | `CHAR(2)` | Appointments: Calendar |
| `SchedulingDurationUnit` |  | |  | `cast ( proj.zteht as cgpl_duration_unit )` | `UNIT(3)` | Time Unit for Execution Duration |
| `ForecastedStartDate` |  | |  | `cast ( proj.sprog as pshlp_forecast_start_de )` | `DATS(8)` | Forecast Start Date |
| `ForecastedEndDate` |  | |  | `cast ( proj.eprog as ps_s4_forecast_finish )` | `DATS(8)` | Forecast Finish Date |
| `BusinessArea` |  | |  | `cast ( proj.vgsbr as gsber )` | `CHAR(4)` | Business Area |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `Currency` |  | |  | `cast ( proj.pwhie as ps_pwhie )` | `CUKY(5)` | WBS currency (project definition) |
| `BudgetProfile` |  | |  | `bprof` | `CHAR(6)` | Budget Profile |
| `PlanningProfile` |  | |  | `pprof` | `CHAR(6)` | Planning Profile |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `ProjInterestCalcProfile` |  | |  | `cast ( proj.zschm as ps_zschm )` | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `ResultAnalysisInternalID` |  | |  | `abgsl` | `CHAR(6)` | Results Analysis Key |
| `PartnerDeterminationProcedure` |  | |  | `pargr` | `CHAR(4)` | Partner Determination Procedure |
| `ControllingObjectClass` |  | |  | `cast ( proj.scope as ps_s4_scope_cv )` | `CHAR(2)` | Object Class |
| `NetworkProfile` |  | |  | `vprof` | `CHAR(7)` | Network Profile |
| `WBSSchedulingProfile` |  | |  | `cast ( proj.scprf as ps_s4_schdprf )` | `CHAR(12)` | Profile for WBS scheduling |
| `PlanningMethForProjBasicDate` |  | |  | `cast ( proj.vgplf as ps_s4_vgplf preserving type )` | `NUMC(1)` | Planning method for project basic dates |
| `PlanningMethForProjFcstdDate` |  | |  | `cast ( proj.ewplf as ps_s4_ewplf preserving type )` | `NUMC(1)` | Planning method for project forecast dates |
| `NetworkAssignmentType` |  | |  | `zuord` | `NUMC(1)` | Network assignment |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `WBSIsMarkedForIntegratedPlng` |  | |  | `plint` | `CHAR(1)` | Indicator for Integrated Planning |
| `ProjectHasOwnStock` |  | |  | `cast ( proj.besta as psb_stock )` | `CHAR(1)` | Project Stock |
| `InventorySpecialStockValnType` |  | |  | `kzbws` | `CHAR(1)` | Valuation of Special Stock |
| `WBSIsMarkedForAutomReqmtGrpg` |  | |  | `grtop` | `CHAR(1)` | Indicator: Automatic requirements grouping |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Language` |  | |  | `txtsp` | `LANG(1)` | Language Key |
| `WBSElementMaskID` |  | |  | `kimsk` | `CHAR(24)` | Selection mask for WBS element short IDs |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `DynItemProcessorPrfl` |  | |  | `dppprof` | `CHAR(8)` | Dynamic Item Processor Profile |
| `StatusProfile` |  | |  | `stspd` | `CHAR(8)` | Status profile for project definition |
| `WBSStatusProfile` |  | |  | `stspr` | `CHAR(8)` | Status profile for WBS element |
| `SimulationProfile` |  | |  | `smprf` | `CHAR(7)` | Simulation profile |
| `SchedulingScenario` |  | |  | `schtyp` | `CHAR(1)` | Scheduling scenario |
| `DistributionProfile` |  | |  | `pgprf` | `CHAR(6)` | Distribution profile |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `FreeDefinedTableFieldSemantic` |  | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `FreeDefinedAttribute01` |  | |  | `cast ( proj.usr00 as usr00prps preserving type )` | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  | `cast ( proj.usr01 as usr01prps preserving type )` | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  | `cast ( proj.usr02 as usr02prps preserving type )` | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  | `cast ( proj.usr03 as usr03prps preserving type )` | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedQuantity1` |  | |  | `cast ( proj.usr04 as usr04prps preserving type )` | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) WBS element |
| `FreeDefinedQuantity1Unit` |  | |  | `cast ( proj.use04 as use04prps preserving type )` | `UNIT(3)` | 1st user defined field for quantity field unit - WBS element |
| `FreeDefinedQuantity2` |  | |  | `cast ( proj.usr05 as usr05prps preserving type )` | `QUAN(13)` | 2nd use field for quantity (length 10,3) WBS element |
| `FreeDefinedQuantity2Unit` |  | |  | `cast ( proj.use05 as use05prps preserving type )` | `UNIT(3)` | 2nd user defined field for quantity field unit - WBS element |
| `FreeDefinedAmount1` |  | |  | `cast ( cast ( proj.usr06 * 10 as abap.curr(14,2) ) as abap.curr(13,2) )` | `CURR(13)` |  |
| `FreeDefinedAmount1Currency` |  | |  | `cast ( proj.use06 as use06prps preserving type )` | `CUKY(5)` | 1st user defined field for value field unit - WBS element |
| `FreeDefinedAmount2` |  | |  | `cast ( cast ( proj.usr07 * 10 as abap.curr(14,2) ) as abap.curr(13,2) )` | `CURR(13)` |  |
| `FreeDefinedAmount2Currency` |  | |  | `cast ( proj.use07 as use07prps preserving type )` | `CUKY(5)` | 2nd user defined field for value field unit - WBS element |
| `FreeDefinedDate1` |  | |  | `cast ( proj.usr08 as usr08prps preserving type )` | `DATS(8)` | 1st user field for date -WBS element |
| `FreeDefinedDate2` |  | |  | `cast ( proj.usr09 as usr09prps preserving type )` | `DATS(8)` | 2nd user field for date -WBS element |
| `FreeDefinedIndicator1` |  | |  | `cast ( proj.usr10 as usr10prps preserving type )` | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  | `cast ( proj.usr11 as usr11prps preserving type )` | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `StatusCombinationCode` |  | |  | `proj_status` | `INT1(3)` | Status Combination |
| `IsMarkedForDeletion` |  | |  | `cast ( proj.loevm as ps_s4_loevm )` | `CHAR(1)` | Deletion Indicator |
| `_WBSElement` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |
| `_ProjectShortText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElement` | `I_WBSElementData_2` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProjectProfileCode` | `I_ProjectProfileCode` | [1..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [1..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_Extension` | `E_Project_2` | [1..1] |
| `_ResponsiblePerson` | `I_ProjectResponsiblePerson` | [0..1] |
| `_ProjectApplicant` | `I_ProjectApplicant` | [0..1] |
| `_ProjectShortText` | `I_ProjectObjectShortText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTDATA_2')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IPROJECTDATA2',
  compiler.compareFilter: true
}
@Analytics: { dataCategory: #DIMENSION, dataExtraction: {enabled: true, delta.changeDataCapture: {automatic: true}} }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Appl interface for Project details'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true

@ObjectModel: {
    compositionRoot: true,
    //Keys
    representativeKey: 'ProjectInternalID',
    semanticKey: [ 'Project' ],

    usageType: {
        serviceQuality: #B,
        sizeCategory : #L,
        dataClass: #MASTER
    },

    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
}
define view I_ProjectData_2
  as select from proj
  association [0..*] to I_WBSElementData_2         as _WBSElement         on  $projection.ProjectInternalID = _WBSElement.ProjectInternalID
  association [0..1] to I_CompanyCode              as _CompanyCode        on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea          as _ControllingArea    on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_ProfitCenter             as _ProfitCenter       on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                          and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [1..1] to I_BusinessArea             as _BusinessArea       on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_Plant                    as _Plant              on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProjectProfileCode       as _ProjectProfileCode on  $projection.ProjectProfileCode = _ProjectProfileCode.ProjectProfileCode
  association [1..1] to I_FunctionalArea           as _FunctionalArea     on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_FactoryCalendar          as _FactoryCalendar    on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar

  ---Extension Association
  association [1..1] to E_Project_2                as _Extension          on  $projection.ProjectInternalID = _Extension.ProjectInternalID
  // DPP Changes
  // Person in Responsible for Project
  association [0..1] to I_ProjectResponsiblePerson as _ResponsiblePerson  on  $projection.ResponsiblePerson = _ResponsiblePerson.ResponsiblePerson
  // Project Applicant
  association [0..1] to I_ProjectApplicant         as _ProjectApplicant   on  $projection.ApplicantCode = _ProjectApplicant.ApplicantCode
  // Multilanguage Short text
  association [0..1] to I_ProjectObjectShortText   as _ProjectShortText   on  _ProjectShortText.Language                     = $session.system_language
                                                                          and _ProjectShortText.ProjectApplicationIdentifier = 'PS'
                                                                          and _ProjectShortText.ProjectObjectType            = 'PD'
                                                                          and $projection.ProjectObject                      = _ProjectShortText.ProjectObjectNode
{
      //Entity description fields
  key cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )                  as ProjectInternalID,
      @ObjectModel.text.element: 'ProjectDescription'
      proj.pspid_edit                                                          as ProjectExternalID,
      cast ( proj.pspid as ps_p_pspid preserving type )                        as Project,
      @Semantics.text: true
      cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type)                as ProjectDescription,

      @ObjectModel.foreignKey.association: '_ProjectProfileCode'
      proj.profl                                                               as ProjectProfileCode,

      //Organizational fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( proj.vbukr as bukrs preserving type )                             as CompanyCode,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast ( proj.vkokr as kokrs preserving type )                             as ControllingArea,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      cast ( proj.func_area as fkber preserving type )                         as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      proj.prctr                                                               as ProfitCenter,

      proj.objnr                                                               as ProjectObject,

      //Dates
      @Semantics.calendar.dayOfMonth: true
      proj.plfaz                                                               as PlannedStartDate,
      @Semantics.calendar.dayOfMonth: true
      proj.plsez                                                               as PlannedEndDate,

      proj.stort                                                               as WorkCenterLocation,
      // Tax Jurisdiction Code
      proj.txjcd                                                               as TaxJurisdiction,

      proj.vernr                                                               as ResponsiblePerson,
      @Semantics.text: true
      cast ( proj.verna as ps_s4_verna )                                       as ResponsiblePersonName,
      cast ( proj.astnr as ps_s4_astnr )                                       as ApplicantCode,
      @Semantics.text: true
      proj.astna                                                               as ApplicantName,

      @Semantics.user.createdBy: true
      proj.ernam                                                               as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      proj.erdat                                                               as CreationDate,
      @Semantics.user.lastChangedBy: true
      proj.aenam                                                               as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      cast ( proj.aedat as ps_s4_aedat )                                       as LastChangeDate,

      @Semantics.calendar.dayOfMonth: true
      proj.aedte                                                               as BasicDatesLastScheduledDate,
      @Semantics.calendar.dayOfMonth: true
      cast ( proj.aedtp as ps_aedtp )                                          as FcstdDatesLastScheduledDate,

      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast ( proj.kalid as appca )                                             as FactoryCalendar,
      cast ( proj.zteht as cgpl_duration_unit )                                as SchedulingDurationUnit,
      @Semantics.calendar.dayOfMonth: true
      cast ( proj.sprog as pshlp_forecast_start_de )                           as ForecastedStartDate,
      @Semantics.calendar.dayOfMonth: true
      cast ( proj.eprog as ps_s4_forecast_finish )                             as ForecastedEndDate,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      cast ( proj.vgsbr as gsber )                                             as BusinessArea,
      @ObjectModel.foreignKey.association: '_Plant'
      proj.werks                                                               as Plant,
      cast ( proj.pwhie as ps_pwhie )                                          as Currency,
      proj.bprof                                                               as BudgetProfile,
      proj.pprof                                                               as PlanningProfile,
      proj.imprf                                                               as InvestmentProfile,

      cast ( proj.zschm as ps_zschm )                                          as ProjInterestCalcProfile,
      proj.abgsl                                                               as ResultAnalysisInternalID,
      proj.pargr                                                               as PartnerDeterminationProcedure,

      cast ( proj.scope as ps_s4_scope_cv )                                    as ControllingObjectClass,

      proj.vprof                                                               as NetworkProfile,
      cast  ( proj.scprf as ps_s4_schdprf )                                    as WBSSchedulingProfile,

      cast ( proj.vgplf as ps_s4_vgplf preserving type )                       as PlanningMethForProjBasicDate,
      cast  ( proj.ewplf as ps_s4_ewplf preserving type )                      as PlanningMethForProjFcstdDate,

      proj.zuord                                                               as NetworkAssignmentType,
      proj.xstat                                                               as WBSIsStatisticalWBSElement,
      proj.plint                                                               as WBSIsMarkedForIntegratedPlng,
      @Semantics.booleanIndicator: true
      cast ( proj.besta as psb_stock )                                         as ProjectHasOwnStock,
      proj.kzbws                                                               as InventorySpecialStockValnType,
      proj.grtop                                                               as WBSIsMarkedForAutomReqmtGrpg,
      proj.vkorg                                                               as SalesOrganization,
      proj.vtweg                                                               as DistributionChannel,

      @Semantics.language
      proj.txtsp                                                               as Language,
      proj.kimsk                                                               as WBSElementMaskID,
      proj.spart                                                               as Division,
      proj.dppprof                                                             as DynItemProcessorPrfl,
      proj.stspd                                                               as StatusProfile,
      proj.stspr                                                               as WBSStatusProfile,
      proj.smprf                                                               as SimulationProfile,
      proj.schtyp                                                              as SchedulingScenario,
      proj.pgprf                                                               as DistributionProfile,

      //joint venture fields
      proj.vname                                                               as JointVenture,
      proj.recid                                                               as JointVentureCostRecoveryCode,
      proj.etype                                                               as JointVentureEquityType,
      proj.otype                                                               as JointVentureObjectType,
      proj.jibcl                                                               as JntIntrstBillgClass,
      proj.jibsa                                                               as JntIntrstBillgSubClass,

      proj.slwid                                                               as FreeDefinedTableFieldSemantic,
      cast ( proj.usr00 as usr00prps preserving type )                         as FreeDefinedAttribute01,
      cast ( proj.usr01 as usr01prps preserving type )                         as FreeDefinedAttribute02,
      cast ( proj.usr02 as usr02prps preserving type )                         as FreeDefinedAttribute03,
      cast ( proj.usr03 as usr03prps preserving type )                         as FreeDefinedAttribute04,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity1Unit'
      cast ( proj.usr04 as usr04prps preserving type )                         as FreeDefinedQuantity1,
      cast ( proj.use04 as use04prps preserving type )                         as FreeDefinedQuantity1Unit,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity2Unit'
      cast ( proj.usr05 as usr05prps preserving type )                         as FreeDefinedQuantity2,
      cast ( proj.use05 as use05prps preserving type )                         as FreeDefinedQuantity2Unit,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency'
      cast ( cast ( proj.usr06 * 10  as abap.curr(14,2) ) as abap.curr(13,2) ) as FreeDefinedAmount1,
      cast ( proj.use06 as use06prps preserving type )                         as FreeDefinedAmount1Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      cast ( cast ( proj.usr07 * 10 as abap.curr(14,2) ) as abap.curr(13,2) )  as FreeDefinedAmount2,
      cast ( proj.use07 as use07prps preserving type )                         as FreeDefinedAmount2Currency,
      cast ( proj.usr08 as usr08prps preserving type )                         as FreeDefinedDate1,
      cast ( proj.usr09 as usr09prps preserving type )                         as FreeDefinedDate2,
      cast ( proj.usr10 as usr10prps preserving type )                         as FreeDefinedIndicator1,
      cast ( proj.usr11 as usr11prps preserving type )                         as FreeDefinedIndicator2,

      proj.proj_status                                                         as StatusCombinationCode,
      cast ( proj.loevm as ps_s4_loevm )                                       as IsMarkedForDeletion,

      //Associations
      _WBSElement,
      _CompanyCode,
      _ControllingArea,
      _ProfitCenter,
      _BusinessArea,
      _Plant,
      _ProjectProfileCode,
      _FunctionalArea,
      _FactoryCalendar,

      @Consumption.hidden: true
      _ResponsiblePerson,
      @Consumption.hidden: true
      _ProjectApplicant,
      _ProjectShortText
}
```
