---
name: I_PROJECTBASICDATA
description: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?"
semantic_vi: "Project Basic Data — CDS view giao diện (transactional data) dựa trên proj."
keywords:
  - "project"
  - "basic"
  - "data"
  - "internal"
  - "external"
  - "description"
  - "profile"
  - "code"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - bo:project
---
# I_PROJECTBASICDATA

**This CDS view provides the prerequisites for answering the following business questions: For Professional Services or Financial related needs, what are the organizational details associated with a project?**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` | ✓ | |  | `cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  | `pspid_edit` | `CHAR(24)` | Project Number (External) Edited |
| `Project` |  | |  | `pspid` | `CHAR(24)` | Project Definition |
| `ProjectDescription` |  | |  | `cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type)` | `CHAR(40)` | Project Name |
| `ProjectProfileCode` |  | |  | `profl` | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  | `cast ( proj.vbukr as bukrs preserving type )` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  | `cast ( proj.vkokr as kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  | `cast ( proj.func_area as fkber preserving type )` | `CHAR(16)` | Functional Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `ProjectObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `PlannedStartDate` |  | |  | `plfaz` | `DATS(8)` | Project planned start date |
| `PlannedEndDate` |  | |  | `plsez` | `DATS(8)` | Project planned finish date |
| `AvailabilityControlProfile` |  | |  | `avc_profile` | `CHAR(6)` | Budget Availability Control: Profile |
| `AvailabilityControlIsActive` |  | |  | `avc_active` | `CHAR(1)` | Availability control indicator(AVC) |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JntVntrProjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `Location` |  | |  | `stort` | `CHAR(10)` | Location |
| `ProjectCurrency` |  | |  | `cpcurr` | `CUKY(5)` | Custom Project Currency |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `EntProjectSettlementType` |  | |  | `settlementtype` | `CHAR(2)` | Enterprise Project Settlement Type |
| `EntProjHasProjectStockEnabled` |  | |  | `besta` | `CHAR(1)` | Project stock |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `_RootWBSElement` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ProfitCenter2` | | ✓ | | | | |
| `_AvailabilityCtrlProfile` | | ✓ | | | | |
| `_EntProjectSettlementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RootWBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_ProfitCenter2` | `I_ProfitCenter` | [0..*] |
| `_AvailabilityCtrlProfile` | `I_AvailabilityCtrlProfile` | [0..1] |
| `_EntProjectSettlementType` | `I_EntProjectSettlementType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBASICDATA')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IPROJECTBSCDATA',
  compiler.compareFilter: true
}
@Analytics: { dataCategory: #DIMENSION }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Project Basic Data'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true

@Metadata.allowExtensions: true

@ObjectModel: {
    compositionRoot: true,
    //Keys
    representativeKey: 'ProjectInternalID',
    semanticKey: [ 'Project' ],

    usageType: {
        serviceQuality: #B,
        sizeCategory : #L,
        dataClass: #TRANSACTIONAL
    },
    
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
}



define view I_ProjectBasicData
  as select from proj
  association [0..1] to I_WBSElementBasicData     as _RootWBSElement          on  $projection.ProjectInternalID = _RootWBSElement.ProjectInternalID 
                                                                                  and $projection.ProjectExternalID = _RootWBSElement.WBSElementExternalID      
   
  //association [0..1] to prps     as _RootWBSElement          on  $projection.ProjectInternalID = _RootWBSElement.psphi 
   //                                                                              and _RootWBSElement.stufe = 1                                                                          

  association [0..*] to I_WBSElementBasicData     as _WBSElement              on  $projection.ProjectInternalID = _WBSElement.ProjectInternalID
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea         as _ControllingArea         on  $projection.ControllingArea = _ControllingArea.ControllingArea
  //association [0..1] to I_FunctionalArea as _FunctionalArea on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_ProfitCenter            as _ProfitCenter            on  $projection.ControllingArea  =  _ProfitCenter.ControllingArea
                                                                              and $projection.ProfitCenter     =  _ProfitCenter.ProfitCenter
                                                                              and $projection.PlannedStartDate <= _ProfitCenter.ValidityEndDate
                                                                              and $projection.PlannedStartDate >= _ProfitCenter.ValidityStartDate
                                                                              
  association [0..*] to I_ProfitCenter            as _ProfitCenter2           on  $projection.ControllingArea  =  _ProfitCenter2.ControllingArea
                                                                              and $projection.ProfitCenter     =  _ProfitCenter2.ProfitCenter
                                                                              
  association [0..1] to I_AvailabilityCtrlProfile as _AvailabilityCtrlProfile on  $projection.AvailabilityControlProfile = _AvailabilityCtrlProfile.AvailabilityControlProfile
  //Hierarchy settlement changes
  association [0..1] to I_EntProjectSettlementType as _EntProjectSettlementType   on  $projection.EntProjectSettlementType = _EntProjectSettlementType.EntProjectSettlementType
 
  
  
{

      //Entity description fields
  key cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )   as ProjectInternalID,
      @ObjectModel.text.element: 'ProjectDescription'
      proj.pspid_edit                                           as ProjectExternalID,
      proj.pspid                                                as Project,
      cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type) as ProjectDescription,
      proj.profl                                                as ProjectProfileCode,



      //Organisational fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( proj.vbukr as bukrs preserving type )              as CompanyCode,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast ( proj.vkokr as kokrs preserving type )              as ControllingArea,
      //@ObjectModel.foreignKey.association: '_FunctionalArea'
      cast ( proj.func_area as fkber preserving type )          as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter2'
      proj.prctr                                                as ProfitCenter,

      //Dimensions
      proj.objnr                                                as ProjectObject,

      //Dates
      @Semantics.calendar.dayOfMonth: true
      proj.plfaz                                                as PlannedStartDate,
      @Semantics.calendar.dayOfMonth: true
      proj.plsez                                                as PlannedEndDate,

      proj.avc_profile                                          as AvailabilityControlProfile,
      proj.avc_active                                           as AvailabilityControlIsActive,
      //Joint venture fields
      proj.vname                                                as JointVenture,
      proj.recid                                                as JointVentureCostRecoveryCode,
      proj.etype                                                as JointVentureEquityType,
      proj.otype                                                as JntVntrProjectType,
      proj.jibcl                                                as JntIntrstBillgClass,
      proj.jibsa                                                as JntIntrstBillgSubClass,
      proj.stort                                                as Location,
      proj.cpcurr                                               as ProjectCurrency,
      // Tax Jurisdiction Code
      proj.txjcd                                                as TaxJurisdiction,
      //Hierarchy settlement changes        
      proj.settlementtype                                     as EntProjectSettlementType,
      // Enabling Project stock
      proj.besta                                                as EntProjHasProjectStockEnabled,
      
      @Consumption.hidden: true
      proj.werks                                                as Plant, 
     
      //Associations
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _WBSElement,
      _CompanyCode,
      _ControllingArea,
      //_FunctionalArea,
      //@Consumption.filter.businessDate.at : true
      _ProfitCenter,
      @Consumption.hidden: true
      _ProfitCenter2,
      _AvailabilityCtrlProfile,
            //Hierarchy settlement changes
      _EntProjectSettlementType,
      @Consumption.hidden: true
      _RootWBSElement
}
```
