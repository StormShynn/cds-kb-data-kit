---
name: I_ENGMNTPROJSRVCORGSTDVH
description: "This view provides value help for Service Organization. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Service Organization instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSRVCORGSTDVH')/$value
semantic_en: "This view provides value help for Service Organization. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Service Organization instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Engagement Project Service Organization — CDS view giao diện dựa trên I_EngagementProjectSrvcOrg."
keywords:
  - "engagement"
  - "project"
  - "service"
  - "organization"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - bo:project
  - project
---
# I_ENGMNTPROJSRVCORGSTDVH

**This view provides value help for Service Organization. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Service Organization instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSRVCORGSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` | ✓ | |  |  | `CHAR(5)` | Service Organization |
| `_Text` | | ✓ | | | | |
| `_CompanyCodeAuth` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSRVCORGSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSRVCORGSTDVH')/$value)*

```abap
//GENERATED:005:GlBfhyFV7jY5nYuOUqDCY0
@AbapCatalog.sqlViewName: 'IEPSO__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'EngagementProjectServiceOrg'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@Consumption.valueHelpDefault.fetchValues: #AUTOMATICALLY_WHEN_DISPLAYED
@EndUserText.label: 'Engagement Project Service Organization'
@ObjectModel: {modelingPattern: #VALUE_HELP_PROVIDER, 
               supportedCapabilities: [#VALUE_HELP_PROVIDER]
}

define view I_EngmntProjSrvcOrgStdVH as select from I_EngagementProjectSrvcOrg {
  @ObjectModel.text.association: '_Text'
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key EngagementProjectServiceOrg,
//  @Consumption.hidden: true
//  _CompanyCode.AssignedOrganisation as EngmntProjectCompanyCode,
  _Text,
  @Consumption.hidden: true
  _CompanyCodeAuth
}
```
