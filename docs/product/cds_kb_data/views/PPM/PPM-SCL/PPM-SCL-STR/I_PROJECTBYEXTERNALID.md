---
name: I_PROJECTBYEXTERNALID
description: "Project by formatted external ID"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value
semantic_en: "Project by formatted external ID"
semantic_vi: "Project by formatted external ID — CDS view giao diện (transactional data) dựa trên proj."
keywords:
  - "project"
  - "formatted"
  - "external"
  - "internal"
  - "description"
  - "profile"
  - "code"
  - "company"
tags:
  - PPM
  - bo:project
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
---
# I_PROJECTBYEXTERNALID

**Project by formatted external ID**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectExternalID` | ✓ | |  | `pspid_edit` | `CHAR(24)` | Project Number (External) Edited |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYEXTERNALID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROJBYEXTKEY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 
@EndUserText.label: 'Project by formatted external ID'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

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
    
    supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
define view I_ProjectByExternalID as select from proj
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
{
      @ObjectModel.text.element: 'ProjectDescription'
  key proj.pspid_edit                                            as ProjectExternalID,
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
