---
name: I_STANDARDPROJECT_2
description: "Standard Project Details"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value
semantic_en: "Standard Project Details"
semantic_vi: "Standard Project Details — CDS view giao diện dựa trên projs."
keywords:
  - "standard"
  - "project"
  - "details"
  - "internal"
  - "coding"
  - "mask"
  - "description"
  - "object"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - project
  - PS-ST
---
# I_STANDARDPROJECT_2

**Standard Project Details**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StandardProjectInternalID` | ✓ | |  | `cast ( projs.pspnr as ps_s4_ispsp preserving type )` | `NUMC(8)` | Current number for standard project |
| `StdProject` |  | |  | `cast ( projs.pspid as projk_bi )` | `CHAR(24)` | Project Account Assignment (PS_PSP_PNR Batch Input Field) |
| `StandardProjectWithCodingMask` |  | |  | `pspid_edit` | `CHAR(24)` | Standard Project Number (Extern) Edited |
| `StandardProjectDescription` |  | |  | `case when _ProjectShortText.LanguageBasedShortText is not initial then _ProjectShortText.LanguageBasedShortText else cast ( projs.post1 as ppe_proj_name preserving type ) end` | `CHAR(40)` | Name of cProjects Project (Language-Dependent) |
| `StandardProjectObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `cast ( projs.aenam as ps_s4_aenam preserving type )` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `cast ( projs.aedat as ps_s4_updat preserving type )` | `DATS(8)` | Date on which object was last changed |
| `ResponsiblePerson` |  | |  | `cast ( projs.vernr as ps_s4_vernr preserving type )` | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  | `cast ( projs.verna as ps_s4_verna preserving type )` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  | `cast ( projs.astnr as ps_s4_astnr preserving type )` | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  | `astna` | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  | `vbukr` | `CHAR(4)` | Company code for the project |
| `BusinessArea` |  | |  | `vgsbr` | `CHAR(4)` | Business area for the project |
| `ControllingArea` |  | |  | `vkokr` | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `Currency` |  | |  | `pwhie` | `CUKY(5)` | WBS currency (project definition) |
| `NetworkAssignmentType` |  | |  | `zuord` | `NUMC(1)` | Network assignment |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  | `cast ( projs.kalid as appca preserving type )` | `CHAR(2)` | Appointments: Calendar |
| `NetworkProfile` |  | |  | `vprof` | `CHAR(7)` | Network Profile |
| `ProjectProfileCode` |  | |  | `profl` | `CHAR(7)` | Project Profile |
| `BudgetProfile` |  | |  | `bprof` | `CHAR(6)` | Budget Profile |
| `Language` |  | |  | `txtsp` | `LANG(1)` | Language Key |
| `ProjectHasOwnStock` |  | |  | `cast ( projs.besta as psb_stock preserving type )` | `CHAR(1)` | Project Stock |
| `ControllingObjectClass` |  | |  | `cast ( projs.scope as ps_s4_scope_cv preserving type )` | `CHAR(2)` | Object Class |
| `WBSIsStatisticalWBSElement` |  | |  | `xstat` | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` |  | |  | `cast ( projs.txjcd as wb2_txjcd_busvol preserving type )` | `CHAR(15)` | Tax Jurisdiction Code in BV Document |
| `ProjInterestCalcProfile` |  | |  | `zschm` | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` |  | |  | `imprf` | `CHAR(6)` | Investment Measure Profile |
| `ResultAnalysisInternalID` |  | |  | `abgsl` | `CHAR(6)` | Results Analysis Key |
| `PlanningProfile` |  | |  | `pprof` | `CHAR(6)` | Planning Profile |
| `WBSIsMarkedForIntegratedPlng` |  | |  | `plint` | `CHAR(1)` | Indicator for Integrated Planning |
| `InventorySpecialStockValnType` |  | |  | `kzbws` | `CHAR(1)` | Valuation of Special Stock |
| `WBSIsMarkedForAutomReqmtGrpg` |  | |  | `grtop` | `CHAR(1)` | Indicator: Automatic requirements grouping |
| `WorkCenterLocation` |  | |  | `stort` | `CHAR(10)` | Location |
| `FunctionalArea` |  | |  | `func_area` | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `DynItemProcessorPrfl` |  | |  | `dppprof` | `CHAR(8)` | Dynamic Item Processor Profile |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `WBSElementMaskID` |  | |  | `kimsk` | `CHAR(24)` | Selection mask for WBS element short IDs |
| `WBSHasAutomValueTransferToProj` |  | |  | `autod` | `CHAR(1)` | Automatic value transfer from WBS element to project def. |
| `StatusProfile` |  | |  | `stspd` | `CHAR(8)` | Status profile for project definition |
| `WBSStatusProfile` |  | |  | `stspr` | `CHAR(8)` | Status profile for WBS element |
| `PlanningMethForProjBasicDate` |  | |  | `cast ( projs.vgplf as ps_s4_vgplf preserving type )` | `NUMC(1)` | Planning method for project basic dates |
| `PlanningMethForProjFcstdDate` |  | |  | `cast ( projs.ewplf as ps_s4_ewplf preserving type )` | `NUMC(1)` | Planning method for project forecast dates |
| `SchedulingDurationUnit` |  | |  | `cast ( projs.zteht as cgpl_duration_unit preserving type )` | `UNIT(3)` | Time Unit for Execution Duration |
| `WBSSchedulingProfile` |  | |  | `cast ( projs.scprf as ps_s4_schdprf preserving type )` | `CHAR(12)` | Profile for WBS scheduling |
| `SimulationProfile` |  | |  | `smprf` | `CHAR(7)` | Simulation profile |
| `WBSIsMarkedForCalcWithActDates` |  | |  | `flgvrg` | `CHAR(1)` | Indicator: Bottom-up calculation with activity dates |
| `ProjHasWBSForSalesOrderItem` |  | |  | `flgsd` | `CHAR(1)` | Indicator: New structure for each sales order item |
| `PartnerDeterminationProcedure` |  | |  | `pargr` | `CHAR(4)` | Partner Determination Procedure |
| `SchedulingScenario` |  | |  | `schtyp` | `CHAR(1)` | Scheduling scenario |
| `FreeDefinedTableFieldSemantic` |  | |  | `slwid` | `CHAR(7)` | Key word ID for user-defined fields |
| `FreeDefinedAttribute01` |  | |  | `cast ( projs.usr00 as usr00proj preserving type )` | `CHAR(20)` | 1st user field for 20 characters - Project |
| `FreeDefinedAttribute02` |  | |  | `cast ( projs.usr01 as usr01proj preserving type )` | `CHAR(20)` | 2nd user field 20 digits - Project |
| `FreeDefinedAttribute03` |  | |  | `cast ( projs.usr02 as usr02proj preserving type )` | `CHAR(10)` | 3rd user-defined field 10 digits - Project |
| `FreeDefinedAttribute04` |  | |  | `cast ( projs.usr03 as usr03proj preserving type )` | `CHAR(10)` | 4th user-defined field 10 digits - Project |
| `FreeDefinedQuantity1` |  | |  | `cast ( projs.usr04 as usr04proj preserving type )` | `QUAN(13)` | 1st user-defined field for quantity(length 10,3) - Project |
| `FreeDefinedQuantity1Unit` |  | |  | `cast ( projs.use04 as use04proj preserving type )` | `UNIT(3)` | 1st user defined field for quantity field unit - Project |
| `FreeDefinedQuantity2` |  | |  | `cast ( projs.usr05 as usr05proj preserving type )` | `QUAN(13)` | 2nd use field for quantity (length 10,3) - Project |
| `FreeDefinedQuantity2Unit` |  | |  | `cast ( projs.use05 as use05proj preserving type )` | `UNIT(3)` | 2nd user defined field for quantity field unit - Project |
| `FreeDefinedAmount1` |  | |  | `cast ( projs.usr06 as usr06proj preserving type )` | `CURR(13)` | 1st user field for values (length 10,3) - Project |
| `FreeDefinedAmount1Currency` |  | |  | `cast ( projs.use06 as use06proj preserving type )` | `CUKY(5)` | 1st user defined field for value field unit - Project |
| `FreeDefinedAmount2` |  | |  | `cast ( projs.usr07 as usr07proj preserving type )` | `CURR(13)` | 2nd user field for values (length 10,3) - Project |
| `FreeDefinedAmount2Currency` |  | |  | `cast ( projs.use07 as use07proj preserving type )` | `CUKY(5)` | 2nd user defined field for value field unit - Project |
| `FreeDefinedDate1` |  | |  | `cast ( projs.usr08 as usr08proj preserving type )` | `DATS(8)` | 1st user field for date - Project |
| `FreeDefinedDate2` |  | |  | `cast ( projs.usr09 as usr09proj preserving type )` | `DATS(8)` | 2nd user field for date - Project |
| `FreeDefinedIndicator1` |  | |  | `cast ( projs.usr10 as usr10proj preserving type )` | `CHAR(1)` | 1st user field for 'Indicator for evaluations' - Project |
| `FreeDefinedIndicator2` |  | |  | `cast ( projs.usr11 as usr11proj preserving type )` | `CHAR(1)` | 2nd user field for 'Indicator for evaluations' - Project |
| `StatusCode` |  | | `_StatusObjectStatus` | `StatusCode` | `CHAR(5)` | Object status |
| `StandardProjectIsCreated` |  | |  | `cast ( case _StatusObjectStatus.StatusCode when 'I0133' then 'X' else '' end as ps_s4_statcreated preserving type )` | `CHAR(1)` | Standard Project Created |
| `StandardProjectIsReleased` |  | |  | `cast ( case _StatusObjectStatus.StatusCode when 'I0134' then 'X' else '' end as ps_s4_statreleased preserving type )` | `CHAR(1)` | Standard Project Released |
| `StandardProjectIsClosed` |  | |  | `cast ( case _StatusObjectStatus.StatusCode when 'I0135' then 'X' else '' end as ps_s4_statclosed preserving type )` | `CHAR(1)` | Standard Project Closed |
| `_ProjectShortText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectShortText` | `I_ProjectObjectShortText` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_WBSElement` | `I_StandardWBSElement_2` | [1..*] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProjectProfileCode` | `I_ProjectProfileCode` | [1..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [1..1] |
| `_ResponsiblePerson` | `I_ProjectResponsiblePerson` | [0..1] |
| `_ProjectApplicant` | `I_ProjectApplicant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STANDARDPROJECT_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTDPROJ2'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.representativeKey: 'StandardProjectInternalID'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Standard Project Details'
@Metadata.allowExtensions: true

@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
      dataCategory: #DIMENSION,
      internalName: #LOCAL,
      dataExtraction : {
        enabled: true,
        delta:{
        changeDataCapture: {
            mapping: [
                { table: 'projs', role: #MAIN,
                  viewElement: ['StandardProjectInternalID'],
                  tableElement: ['pspnr']
                 },
                {
                  table: 'JEST',
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  viewElement:  ['StandardProjectObject', 'StatusCode'],
                  tableElement: ['objnr','stat']
                }
             ]
               }
            }
          }
    }

define view I_StandardProject_2
  as select from           projs
    left outer to one join I_StatusObjectStatusBasic as _StatusObjectStatus on  _StatusObjectStatus.StatusObject     = projs.objnr
                                                                            and _StatusObjectStatus.StatusIsInactive = ' '

  association [0..1] to I_ProjectObjectShortText   as _ProjectShortText       on  _ProjectShortText.Language                     = $session.system_language
                                                                              and _ProjectShortText.ProjectApplicationIdentifier = 'PS'
                                                                              and _ProjectShortText.ProjectObjectType            = 'PS'
                                                                              and $projection.StandardProjectObject              = _ProjectShortText.ProjectObjectNode
  association [1..1] to I_ControllingArea          as _ControllingArea        on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [1..1] to I_CompanyCode              as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..*] to I_StandardWBSElement_2     as _WBSElement             on  $projection.StandardProjectInternalID = _WBSElement.StandardProjectInternalID
  association [1..1] to I_BusinessArea             as _BusinessArea           on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_Plant                    as _Plant                  on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProjectProfileCode       as _ProjectProfileCode     on  $projection.ProjectProfileCode = _ProjectProfileCode.ProjectProfileCode
  association [1..1] to I_ControllingObjectClass   as _ControllingObjectClass on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  // Person in Responsible for Project
  association [0..1] to I_ProjectResponsiblePerson as _ResponsiblePerson      on  $projection.ResponsiblePerson = _ResponsiblePerson.ResponsiblePerson
  // Project Applicant
  association [0..1] to I_ProjectApplicant         as _ProjectApplicant       on  $projection.ApplicantCode = _ProjectApplicant.ApplicantCode
{
  key cast ( projs.pspnr as ps_s4_ispsp preserving type )                         as StandardProjectInternalID,
      @ObjectModel.text.element: ['StandardProjectDescription']
      cast ( projs.pspid as projk_bi )                                            as StdProject,
      projs.pspid_edit                                                            as StandardProjectWithCodingMask,

      @Semantics.text: true
      case
      when _ProjectShortText.LanguageBasedShortText is not initial
      then _ProjectShortText.LanguageBasedShortText
      else cast ( projs.post1 as ppe_proj_name preserving type )
      end                                                                         as StandardProjectDescription,

      projs.objnr                                                                 as StandardProjectObject,

      @Semantics.user.createdBy: true
      projs.ernam                                                                 as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      projs.erdat                                                                 as CreationDate,
      @Semantics.user.lastChangedBy: true
      cast ( projs.aenam as ps_s4_aenam preserving type )                         as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      cast ( projs.aedat as ps_s4_updat preserving type )                         as LastChangeDate,

      @ObjectModel.text.element: ['ResponsiblePersonName']
      cast ( projs.vernr as ps_s4_vernr preserving type  )                        as ResponsiblePerson,
      @Semantics.text: true
      cast ( projs.verna as ps_s4_verna preserving type )                         as ResponsiblePersonName,
      @ObjectModel.text.element: ['ApplicantCode']
      cast ( projs.astnr as ps_s4_astnr preserving type )                         as ApplicantCode,
      @Semantics.text: true
      projs.astna                                                                 as ApplicantName,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      projs.vbukr                                                                 as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      projs.vgsbr                                                                 as BusinessArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      projs.vkokr                                                                 as ControllingArea,
      projs.prctr                                                                 as ProfitCenter,
      projs.pwhie                                                                 as Currency,
      projs.zuord                                                                 as NetworkAssignmentType,
      @ObjectModel.foreignKey.association: '_Plant'
      projs.werks                                                                 as Plant,
      cast ( projs.kalid as appca preserving type )                               as FactoryCalendar,
      projs.vprof                                                                 as NetworkProfile,
      projs.profl                                                                 as ProjectProfileCode,
      projs.bprof                                                                 as BudgetProfile,
      @Semantics.language
      projs.txtsp                                                                 as Language,
      @Semantics.booleanIndicator: true
      cast ( projs.besta as psb_stock preserving type )                           as ProjectHasOwnStock,
      cast ( projs.scope as ps_s4_scope_cv preserving type )                      as ControllingObjectClass,
      @Semantics.booleanIndicator: true
      projs.xstat                                                                 as WBSIsStatisticalWBSElement,
      cast ( projs.txjcd as wb2_txjcd_busvol preserving type )                    as TaxJurisdiction,
      projs.zschm                                                                 as ProjInterestCalcProfile,
      projs.imprf                                                                 as InvestmentProfile,
      projs.abgsl                                                                 as ResultAnalysisInternalID,
      projs.pprof                                                                 as PlanningProfile,
      @Semantics.booleanIndicator: true
      projs.plint                                                                 as WBSIsMarkedForIntegratedPlng,
      projs.kzbws                                                                 as InventorySpecialStockValnType,
      @Semantics.booleanIndicator: true
      projs.grtop                                                                 as WBSIsMarkedForAutomReqmtGrpg,
      projs.stort                                                                 as WorkCenterLocation,
      projs.func_area                                                             as FunctionalArea,
      projs.vkorg                                                                 as SalesOrganization,
      projs.vtweg                                                                 as DistributionChannel,
      projs.spart                                                                 as Division,
      projs.dppprof                                                               as DynItemProcessorPrfl,
      projs.vname                                                                 as JointVenture,
      projs.recid                                                                 as JointVentureCostRecoveryCode,
      projs.etype                                                                 as JointVentureEquityType,
      projs.otype                                                                 as JointVentureObjectType,
      projs.jibcl                                                                 as JointVentureClass,
      projs.jibsa                                                                 as JointVentureSubClass,
      projs.kimsk                                                                 as WBSElementMaskID,
      @Semantics.booleanIndicator: true
      projs.autod                                                                 as WBSHasAutomValueTransferToProj,
      projs.stspd                                                                 as StatusProfile,
      projs.stspr                                                                 as WBSStatusProfile,
      cast ( projs.vgplf as ps_s4_vgplf preserving type )                         as PlanningMethForProjBasicDate,
      cast ( projs.ewplf as ps_s4_ewplf preserving type )                         as PlanningMethForProjFcstdDate,
      cast ( projs.zteht as cgpl_duration_unit preserving type )                  as SchedulingDurationUnit,
      cast ( projs.scprf as ps_s4_schdprf preserving type )                       as WBSSchedulingProfile,
      projs.smprf                                                                 as SimulationProfile,
      @Semantics.booleanIndicator: true
      projs.flgvrg                                                                as WBSIsMarkedForCalcWithActDates,
      @Semantics.booleanIndicator: true
      projs.flgsd                                                                 as ProjHasWBSForSalesOrderItem,
      projs.pargr                                                                 as PartnerDeterminationProcedure,
      projs.schtyp                                                                as SchedulingScenario,
      projs.slwid                                                                 as FreeDefinedTableFieldSemantic,
      cast ( projs.usr00 as usr00proj preserving type )                           as FreeDefinedAttribute01,
      cast ( projs.usr01 as usr01proj preserving type )                           as FreeDefinedAttribute02,
      cast ( projs.usr02 as usr02proj preserving type )                           as FreeDefinedAttribute03,
      cast ( projs.usr03 as usr03proj preserving type )                           as FreeDefinedAttribute04,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity1Unit'
      cast ( projs.usr04 as usr04proj preserving type )                           as FreeDefinedQuantity1,
      cast ( projs.use04 as use04proj preserving type )                           as FreeDefinedQuantity1Unit,
      @Semantics.quantity.unitOfMeasure:'FreeDefinedQuantity2Unit'
      cast ( projs.usr05 as usr05proj preserving type )                           as FreeDefinedQuantity2,
      cast ( projs.use05 as use05proj preserving type )                           as FreeDefinedQuantity2Unit,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount1Currency'
      cast ( projs.usr06 as usr06proj preserving type )                           as FreeDefinedAmount1,
      cast ( projs.use06 as use06proj preserving type )                           as FreeDefinedAmount1Currency,
      @Semantics.amount.currencyCode: 'FreeDefinedAmount2Currency'
      cast ( projs.usr07 as usr07proj preserving type )                           as FreeDefinedAmount2,
      cast ( projs.use07 as use07proj preserving type )                           as FreeDefinedAmount2Currency,
      cast ( projs.usr08 as usr08proj preserving type )                           as FreeDefinedDate1,
      cast ( projs.usr09 as usr09proj preserving type )                           as FreeDefinedDate2,
      cast ( projs.usr10 as usr10proj preserving type )                           as FreeDefinedIndicator1,
      cast ( projs.usr11 as usr11proj preserving type )                           as FreeDefinedIndicator2,

      //Status Fields
      _StatusObjectStatus.StatusCode,

      @Semantics.booleanIndicator: true
      cast ( case _StatusObjectStatus.StatusCode
        when 'I0133' then 'X' else '' end as ps_s4_statcreated preserving type )  as StandardProjectIsCreated,

      @Semantics.booleanIndicator: true
      cast ( case _StatusObjectStatus.StatusCode
        when 'I0134' then 'X' else '' end as ps_s4_statreleased preserving type ) as StandardProjectIsReleased,

      @Semantics.booleanIndicator: true
      cast ( case _StatusObjectStatus.StatusCode
        when 'I0135' then 'X' else '' end as ps_s4_statclosed preserving type )   as StandardProjectIsClosed,

      _ControllingArea,
      _CompanyCode,
      _BusinessArea,
      _Plant,
      _WBSElement,
      _ProjectProfileCode,
      _ControllingObjectClass,
      @UI.hidden: true
      @Consumption.hidden: true
      _ResponsiblePerson,
      @UI.hidden: true
      @Consumption.hidden: true
      _ProjectApplicant,
      _ProjectShortText

}
```
