---
name: I_CNSLDTNSGMTHIERELIM
description: "This CDS view extracts the elimination members for the analytical scenario for the Segment hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value
semantic_en: "This CDS view extracts the elimination members for the analytical scenario for the Segment hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Hierarchy Elimination for Segment — CDS view cơ bản dựa trên fincs_sgmt_hier."
keywords:
  - "hierarchy"
  - "elimination"
  - "for"
  - "segment"
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
# I_CNSLDTNSGMTHIERELIM

**This CDS view extracts the elimination members for the analytical scenario for the Segment hierarchy node. It's valid for SAP BW/4HANA. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` | ✓ | |  | `cast(hryid as fincs_hryid_segment)` | `CHAR(40)` | Segment Hierarchy |
| `ValidityStartDate` | ✓ | |  | `hryvalfrom` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  | `hryvalto` | `DATS(8)` | Valid To Date |
| `Segment` | ✓ | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerSegment` | ✓ | |  | `psegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  | `segment_eliminated` | `CHAR(25)` | Consolidation Elimination Member |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSGMTHIERELIM')/$value)*

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic : true
    }
  },
  technicalName: 'ICSGMTHIERELIM'
  
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
   sapObjectNodeType.name: 'CnsldtnSegmentHierarchyNode'
}
@VDM:{
  viewType: #BASIC

  }
@EndUserText.label: 'Hierarchy Elimination for Segment'
define view entity I_CnsldtnSgmtHierElim

  as select from fincs_sgmt_hier
{
  key cast(hryid as fincs_hryid_segment) as ConsolidationSegmentHierarchy,
  key hryvalfrom                         as ValidityStartDate,
  key hryvalto                           as ValidityEndDate,
  key segment                            as Segment,
  key psegment                           as PartnerSegment,

      segment_eliminated                 as ConsolidationSegmentForElim
}
```
