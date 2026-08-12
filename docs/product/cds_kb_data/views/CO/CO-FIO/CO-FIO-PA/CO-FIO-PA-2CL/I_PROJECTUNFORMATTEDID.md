---
name: I_PROJECTUNFORMATTEDID
description: "Project by unformatted external ID"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value
semantic_en: "Project by unformatted external ID"
semantic_vi: "Project by unformatted external ID — CDS view giao diện (transactional data) dựa trên proj."
keywords:
  - "project"
  - "unformatted"
  - "external"
  - "internal"
  - "description"
  - "profile"
  - "code"
  - "company"
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - project
---
# I_PROJECTUNFORMATTEDID

**Project by unformatted external ID**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectExternalID` | ✓ | |  | `cast ( proj.pspid as fis_rep_project preserving type )` | `CHAR(24)` | Project (external ID) |
| `ProjectInternalID` |  | |  | `cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )` | `NUMC(8)` | Project (internal) |
| `ProjectDescription` |  | |  | `cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type )as ProjectDescription` | `CHAR(40)` | Project Name |
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
| `JntIntrstBillgClass` |  | |  | `jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JntIntrstBillgSubClass` |  | |  | `jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `_RootWBSElement` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RootWBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_AvailabilityCtrlProfile` | `I_AvailabilityCtrlProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTUNFORMATTEDID')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IPROJBYEXTKEYUNF'
//@AbapCatalog.compiler.compareFilter: true
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 
@EndUserText.label: 'Project by unformatted external ID'
@VDM.viewType: #BASIC
//@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
    compositionRoot: true,
    //Keys
    representativeKey: 'ProjectExternalID',
    //semanticKey: [ 'Project' ],
    
    usageType: {
        serviceQuality: #B,
        sizeCategory : #L,
        dataClass: #TRANSACTIONAL
    },
    
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
}
define view entity I_ProjectUnformattedID as select from proj
  association [0..1] to I_WBSElementBasicData     as _RootWBSElement          on  $projection.ProjectInternalID = _RootWBSElement.ProjectInternalID 
                                                                                  and $projection.ProjectExternalID = _RootWBSElement.WBSElementExternalID    
                                                                                  
  association [0..*] to I_WBSElementBasicData as _WBSElement      on  $projection.ProjectInternalID = _WBSElement.ProjectInternalID
  association [0..1] to I_CompanyCode         as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea
  //association [0..1] to I_FunctionalArea as _FunctionalArea on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_ProfitCenter        as _ProfitCenter    on  $projection.ControllingArea  =  _ProfitCenter.ControllingArea
                                                                  and $projection.ProfitCenter     =  _ProfitCenter.ProfitCenter
                                                                  //and $projection.PlannedStartDate <= _ProfitCenter.ValidityEndDate
                                                                  //and $projection.PlannedStartDate >= _ProfitCenter.ValidityStartDate
  association [0..1] to I_AvailabilityCtrlProfile as _AvailabilityCtrlProfile     on  $projection.AvailabilityControlProfile = _AvailabilityCtrlProfile.AvailabilityControlProfile                     
//I_ProjectBasicData
{
      @ObjectModel.text.element: ['ProjectDescription']
  key cast ( proj.pspid as fis_rep_project preserving type ) as ProjectExternalID,
  cast ( proj.pspnr as ps_s4_proj_pspnr preserving type )        as ProjectInternalID,
      @Semantics.text: true
      cast ( proj.post1 as ps_s4_proj_post1_v1 preserving type  )as ProjectDescription,
      proj.profl                                                 as ProjectProfileCode,

      //Organisational fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( proj.vbukr as bukrs preserving type )               as CompanyCode,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast ( proj.vkokr as kokrs preserving type )               as ControllingArea,
      //@ObjectModel.foreignKey.association: '_FunctionalArea'
      cast ( proj.func_area as fkber preserving type )       as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      proj.prctr                                             as ProfitCenter,

      //Dimensions
      proj.objnr                                             as ProjectObject,

      //Dates
      @Semantics.calendar.dayOfMonth: true
      proj.plfaz                                             as PlannedStartDate,
      @Semantics.calendar.dayOfMonth: true
      proj.plsez                                             as PlannedEndDate,
      
      proj.avc_profile                                       as AvailabilityControlProfile,
      proj.avc_active                                        as AvailabilityControlIsActive,
      proj.jibcl                                             as JntIntrstBillgClass,
      proj.jibsa                                             as JntIntrstBillgSubClass,
      @Consumption.hidden: true
      proj.werks                                             as Plant, 

      //Associations
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _WBSElement,
      _CompanyCode,
      _ControllingArea,
      //_FunctionalArea,
      @Consumption.filter.businessDate.at : true
      _ProfitCenter,
      @Consumption.hidden: true
      _RootWBSElement
}
```
