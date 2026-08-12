---
name: I_CNSLDTNVERSIONRELATION
description: "This CDS view extracts the consolidation version mapping based on table FINCS_REF_VERS_R to SAP BW/4HANA and SAP Datasphere. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities, which that indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNVERSIONRELATION')/$value
semantic_en: "This CDS view extracts the consolidation version mapping based on table FINCS_REF_VERS_R to SAP BW/4HANA and SAP Datasphere. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities, which that indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CNSLDTNVERSIONRELATION — CDS view cơ bản (master data) dựa trên fincs_ref_vers_r."
keywords:
  - "cnsldtnversionrelation"
  - "consolidation"
  - "version"
  - "element"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNVERSIONRELATION

**This CDS view extracts the consolidation version mapping based on table FINCS_REF_VERS_R to SAP BW/4HANA and SAP Datasphere. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities, which that indicates the most appropriate use cases for each CDS view. To find out which use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNVERSIONRELATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | |  | `cast( version as fincs_consolidationversion preserving type )` | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` | ✓ | |  | `versionelement` | `CHAR(3)` | Consolidation Version Element |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNVERSIONRELATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNVERSIONRELATION')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICSVERSREL',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: false,
      mapping: [{
                  table: 'FINCS_REF_VERS_R',
                  role: #MAIN,
                  viewElement: ['ConsolidationVersion', 'ConsolidationVersionElement'],
                  tableElement: ['VERSION', 'VERSIONELEMENT']
                }]
    }
  }
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY
}
@ClientHandling: {
  algorithm: #SESSION_VARIABLE
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
  sapObjectNodeType.name: 'ConsolidationVersionRelation'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText: {
  label: 'Consolidation Version Relation'
}

define view I_CnsldtnVersionRelation
  as select from fincs_ref_vers_r

{
      @Consumption.valueHelpDefinition: [{entity: {
                                          name: 'I_CnsldtnVersionVH',
                                          element: 'ConsolidationVersion'
                                        }}]
  key cast( version as fincs_consolidationversion preserving type ) as ConsolidationVersion,

      @Consumption.valueHelpDefinition: [{entity: {
                                          name: 'I_CnsldtnVersionVH',
                                          element: 'ConsolidationVersion'
                                        }}]
  key versionelement                                                as ConsolidationVersionElement
}
```
