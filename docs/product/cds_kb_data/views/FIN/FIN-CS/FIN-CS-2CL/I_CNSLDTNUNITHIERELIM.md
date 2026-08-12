---
name: I_CNSLDTNUNITHIERELIM
description: "This CDS view extracts the elimination members for the analytical scenario for the Consolidation Unit hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value
semantic_en: "This CDS view extracts the elimination members for the analytical scenario for the Consolidation Unit hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Hierarchy Elimination for Consldtn Unit — CDS view cơ bản dựa trên fincs_cu_hier."
keywords:
  - "hierarchy"
  - "elimination"
  - "for"
  - "consldtn"
  - "unit"
  - "consolidation"
  - "validity"
  - "start"
  - "date"
  - "partner"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-2CL
  - FIN-CS
  - FIN-CS-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITHIERELIM

**This CDS view extracts the elimination members for the analytical scenario for the Consolidation Unit hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` | ✓ | |  | `cast(hryid as fincs_consolidationunithier)` | `CHAR(40)` | Consolidation Unit Hierarchy |
| `ValidityStartDate` | ✓ | |  | `hryvalfrom` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  | `hryvalto` | `DATS(8)` | Valid To Date |
| `ConsolidationUnit` | ✓ | |  | `cast ( rbunit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` | ✓ | |  | `cast ( rbuptr as fincs_partnerconsolidationunit preserving type )` | `CHAR(18)` | Partner Unit |
| `ConsolidationUnitForElim` |  | |  | `rbunit_eliminated` | `CHAR(25)` | Consolidation Elimination Member |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value)*

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic : true
    }
  },
  technicalName: 'ICUNITHIERELIM'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #A,
    sizeCategory: #XL },
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
   sapObjectNodeType.name: 'CnsldtnUnitForElimHierNode'
}
@VDM:{
  viewType: #BASIC

  }
@EndUserText.label: 'Hierarchy Elimination for Consldtn Unit'
define view entity I_CnsldtnUnitHierElim

  as select from fincs_cu_hier
{
  key cast(hryid as fincs_consolidationunithier)                        as ConsolidationUnitHierarchy,
  key hryvalfrom                                                        as ValidityStartDate,
  key hryvalto                                                          as ValidityEndDate,
  key cast ( rbunit as fincs_consolidationunit preserving type )        as ConsolidationUnit,
  key cast ( rbuptr as fincs_partnerconsolidationunit preserving type ) as PartnerConsolidationUnit,

      rbunit_eliminated                                                 as ConsolidationUnitForElim
}
```
