---
name: I_ENGMNTPROJSERVICEORGDETAILS
description: "This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value
semantic_en: "This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Engagement Project Service Org Details — CDS view tổng hợp dựa trên P_EngmntProjServiceOrg."
keywords:
  - "engagement"
  - "project"
  - "service"
  - "org"
  - "details"
  - "engmt"
  - "proj"
  - "sales"
  - "delivery"
  - "restricted"
  - "time"
  - "posting"
  - "engmnt"
  - "company"
  - "code"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - delivery
  - interface-view
  - lob:cross_application components
  - master-data
  - plan
  - project
  - bo:project
---
# I_ENGMNTPROJSERVICEORGDETAILS

**This CDS view retrieves the master data of a service organization. This CDS view provides the data to answer the following business questions: Which controlling area and company code does a service organization belong to? What is the default cost center assigned to a service organization? What is the sales area assigned to a service organization? Which purchasing organization and plant are assigned to a service organization? Is the service organization responsible for project sales, or service delivery, or both? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` | ✓ | |  |  | `CHAR(5)` | Service Organization |
| `EngmtProjServiceOrgIsSales` |  | |  |  | `CHAR(1)` | Sales Org |
| `EngmtProjServiceOrgIsDelivery` |  | |  |  | `CHAR(1)` | Delivery Organization |
| `RestrictedTimePosting` |  | |  |  | `CHAR(1)` | Restrict Unstaffed Posting |
| `EngmntProjectCompanyCode` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectCtrlgArea` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectSalesOrg` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectDistrChnl` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectDivision` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectPurchasingOrg` |  | |  |  | `CHAR(20)` |  |
| `EngagementProjectPlant` |  | |  |  | `CHAR(20)` |  |
| `ServiceOrgDefaultCostCenter` |  | |  |  | `CHAR(20)` |  |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EngagementProjectSrvcOrgText` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSERVICEORGDETAILS')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IEPSERORGD',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType:#COMPOSITE
  }
@ObjectModel.representativeKey: 'EngagementProjectServiceOrg'
@EndUserText.label: 'Engagement Project Service Org Details'
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel: {
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #S,
  usageType.dataClass: #CUSTOMIZING,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE],
  modelingPattern: #NONE
}
define view I_EngmntProjServiceOrgDetails
  as select from P_EngmntProjServiceOrg as A
  association [0..1] to I_EngagementProjectSrvcOrgText as _Text  
                     on _Text.EngagementProjectServiceOrg = $projection.EngagementProjectServiceOrg
                     and _Text.Language = $session.system_language 
  association [0..1] to I_CompanyCode as _CompanyCode 
                     on $projection.EngmntProjectCompanyCode       = _CompanyCode.CompanyCode  
  association [0..1] to I_ControllingArea as _ControllingArea  
                     on $projection.EngagementProjectCtrlgArea     = _ControllingArea.ControllingArea
  association [0..1] to I_SalesOrganization as _SalesOrganization 
                     on $projection.EngagementProjectSalesOrg      = _SalesOrganization.SalesOrganization     
  association [0..1] to I_DistributionChannel as _DistributionChannel      
                     on $projection.EngagementProjectDistrChnl     = _DistributionChannel.DistributionChannel  
  association [0..1] to I_Division as _Division
                     on $projection.EngagementProjectDivision      = _Division.Division
  association [0..1] to I_PurchasingOrganization as _PurchasingOrganization
                     on $projection.EngagementProjectPurchasingOrg = _PurchasingOrganization.PurchasingOrganization 
  association [0..1] to I_Plant as _Plant 
                     on $projection.EngagementProjectPlant         = _Plant.Plant 
  association [0..*] to I_CostCenter as _CostCenter    
                     on $projection.ServiceOrgDefaultCostCenter    = _CostCenter.CostCenter                                                                                                                            
{
       @ObjectModel.text.association: '_Text'
  key  A.EngagementProjectServiceOrg,

       @Semantics.booleanIndicator:true
       A.EngmtProjServiceOrgIsSales,

       @Semantics.booleanIndicator:true
       A.EngmtProjServiceOrgIsDelivery,

       A.RestrictedTimePosting,
      
       @EndUserText.label: 'Company Code'
       A.EngmntProjectCompanyCode,

       @EndUserText.label: 'Controlling Area'
       A.EngagementProjectCtrlgArea,

       @EndUserText.label: 'Sales Organization'
       A.EngagementProjectSalesOrg,
  
       @EndUserText.label: 'Distribution Channel'
       A.EngagementProjectDistrChnl,
      
       @EndUserText.label: 'Division'
       A.EngagementProjectDivision,

       @EndUserText.label: 'Purchasing Organization'
       A.EngagementProjectPurchasingOrg,

       @EndUserText.label: 'Plant'
       A.EngagementProjectPlant,
      
       @EndUserText.label: 'Cost Center'
       A.ServiceOrgDefaultCostCenter,

      _Text,
      _CompanyCode,
      _ControllingArea,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _PurchasingOrganization,
      _Plant,
      _CostCenter       
}
```
