---
name: I_ENTWBSELEMENTHIERARCHY
description: "This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value
semantic_en: "This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "WBS Element Hierarchy — CDS view giao diện dựa trên WBS Element Hierarchy."
keywords:
  - "wbs"
  - "element"
  - "hierarchy"
  - "validity"
  - "date"
  - "start"
  - "last"
  - "changed"
  - "user"
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
# I_ENTWBSELEMENTHIERARCHY

**This CDS view retrieves the header information of the WBS element hierarchy for enterprise projects and professional services projects. This CDS view provides the data to answer the following business questions: What is the name and validity of the WBS element hierarchy for enterprise projects and professional services projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` | ✓ | |  | `cast ('WBSELEMENTHIERARCHY ' as wbshierarchy preserving type)` | `CHAR(42)` |  WBS Element Hierarchy |
| `ValidityEndDate` |  | |  | `cast ('99991231' as datbi)` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  | `cast ('19720101' as datab)` | `DATS(8)` | Valid-From Date |
| `LastChangedByUser` |  | |  | `cast ('SAP ' as upnam)` | `CHAR(12)` | Last Changed By |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinWBSElementHierarchyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTWBSELEMENTHIERARCHY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'WBS Element Hierarchy'
 
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #COMPOSITE
 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'WBSElementHierarchy'
 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
 
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
 
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL 
@ObjectModel.sapObjectNodeType.name: 'EnterpriseProjectElement'
@Analytics.dataExtraction.enabled: true
define view entity I_EntWBSElementHierarchy   
  as select distinct from I_SAPClient

  association [0..*] to I_FinWBSElementHierarchyText as _Text         on  $projection.WBSElementHierarchy = _Text.WBSElementHierarchy

{
      @ObjectModel.text.association: '_Text' 
    key cast ('WBSELEMENTHIERARCHY                       ' as wbshierarchy preserving type)   as WBSElementHierarchy,
      @Semantics.businessDate.to: true
      cast ('99991231'     as datbi)                                   as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast ('19720101'     as datab)                                   as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      cast ('SAP         '    as upnam)                                as LastChangedByUser,
      _Text

}
```
