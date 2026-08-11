---
name: I_ENGAGEMENTPROJECTATTRIBUTE
description: "This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?"
semantic_vi: "Attribute of Engagement Project — CDS view tổng hợp dựa trên I_EngagementProject."
keywords:
  - "attribute"
  - "engagement"
  - "project"
  - "name"
  - "engmnt"
  - "proj"
  - "case"
  - "type"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGAGEMENTPROJECTATTRIBUTE

**This CDS view provides the prerequisites for answering the following business questions: What are the basic details of a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  |  | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `EngmntProjNameUprCase` |  | |  |  | `CHAR(40)` | Short Text(Upper case) |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerExternalID` |  | | `_PersonWorkAgreement_1._PersonWorkAgrmtToExternalID` | `PersonWorkAgreementExternalID` | `CHAR(20)` | Work Agreement External ID |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CostCenter` |  | |  | `cast( CostCenter as fis_kostl )` | `CHAR(10)` | Cost Center |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_UserInvlmnt` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTATTRIBUTE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IENGMNTPROJATTR',
//  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_EngagementProjFinancialPlan' ],
  personalData: {
    blockingIndicator: [ '_PersonWorkAgreementDet._BusinessPartner.IsBusinessPurposeCompleted', '_Customer.IsBusinessPurposeCompleted' ],
    blocking: #REQUIRED
  }
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Attribute of Engagement Project'
@ObjectModel: {
  representativeKey: 'EngagementProject',
  sapObjectNodeType.name: 'CommercialProject',  
  usageType: {
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #MIXED
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE]
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM: {
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #COMPOSITE
}
define view I_EngagementProjectAttribute
  as select from I_EngagementProject
{
      //I_EngagementProject
      @ObjectModel.text.element: 'EngagementProjectName'
  key EngagementProject,
      EngagementProjectUUID,
      @Semantics.text : true
      EngagementProjectName,
      EngmntProjNameUprCase,
      EngagementProjectType,
      EngagementProjectServiceOrg,
      EngagementProjectCategory,

      @EndUserText.label: 'Project Manager'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectManagerWorkAgreement'
      ProjectManager,
      ProjectManagerWorkAgreement,
      @EndUserText.label: 'Project Manager External ID'
      _PersonWorkAgreement_1._PersonWorkAgrmtToExternalID.PersonWorkAgreementExternalID as ProjectManagerExternalID,
      ProfitCenter,
      Customer,

      @Consumption.hidden: true
      ProjectProfileCode,

      @Consumption.hidden: true
      CompanyCode,

      @Consumption.hidden: true
      cast( CostCenter as fis_kostl )                                                   as CostCenter,

      @Consumption.hidden: true
      ProjectVisibility,

      _EngagementProjFinancialPlan,
      _Customer,
      @API.element: {
        successor: '_PersonWorkAgreement_1',
        releaseState: #DEPRECATED
      }
      @VDM.lifecycle: {
        successor: '_PersonWorkAgreement_1',
        status: #DEPRECATED
      }

      _PersonWorkAgreement,
      _PersonWorkAgreement_1,
      @Consumption.hidden: true
      _UserInvlmnt
 
      
}
```
