---
name: I_ENGAGEMENTPROJECTSTDVH
description: "This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value
semantic_en: "This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively."
semantic_vi: "Engagement Project — CDS view giao diện dựa trên I_EngagementProject."
keywords:
  - "engagement"
  - "project"
  - "name"
  - "customer"
  - "manager"
  - "work"
  - "agreement"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGAGEMENTPROJECTSTDVH

**This view provides value help for engagement projects. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Engagement Project instead. You may use the parameter EngagementProjectCategory by passing the value C or I to retrieve customer projects or internal projects respectively.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CostCenter` |  | |  | `cast (CostCenter as fis_kostl)` | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `IsMyProject` |  | | `_UserInvlmnt` | `IsMyProject` | `CHAR(1)` |  |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `_Customer` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTDVH')/$value)*

```abap
//GENERATED:005:GlBfhyFV7jY5nYuOUqDCY0
@AbapCatalog.sqlViewName: 'IEP__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'EngagementProject'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@Search.searchable: true
@Consumption.ranked: true
@Consumption.valueHelpDefault.fetchValues: #AUTOMATICALLY_WHEN_DISPLAYED

@AccessControl.authorizationCheck: #CHECK
//<TODO> Please double-check personal data blocking
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Engagement Project'
@ObjectModel: {modelingPattern: #VALUE_HELP_PROVIDER, 
               supportedCapabilities: [#VALUE_HELP_PROVIDER]
}
define view I_EngagementProjectStdVH 
as select from I_EngagementProject {
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Project ID'
  @ObjectModel.text.element: ['EngagementProjectName']
  key EngagementProject,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @EndUserText.label: 'Project Name'
  EngagementProjectName,
  
  @Consumption.hidden: true
  Customer,
  
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'ProjectManagerWorkAgreement'
  @Consumption.hidden: true
  ProjectManager,
      
  @Consumption.hidden: true
  ProjectManagerWorkAgreement,
  
  @Consumption.hidden: true
  EngagementProjectCategory,
  
  @Consumption.hidden: true
  EngagementProjectServiceOrg,
  
  @Consumption.hidden: true
  EngagementProjectType,
  
  @Consumption.hidden: true
  ProjectProfileCode,
  
  @Consumption.hidden: true
  ProjectVisibility,
  
  @Consumption.hidden: true
  CompanyCode,
  
  @Consumption.hidden: true
  cast (CostCenter as fis_kostl) as CostCenter,
  
  @Consumption.hidden: true
  ProfitCenter,
  
  @Consumption.hidden:true
  @Semantics.booleanIndicator:true 
  _UserInvlmnt.IsMyProject,
  
  @Consumption.hidden:true
  EngagementProjectStage,

  @Consumption.hidden: true
  _Customer,
  
  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: '_PersonWorkAgreement_1'
  _PersonWorkAgreement,
  _PersonWorkAgreement_1
  
}
```
