---
name: I_SITEBLOCKINGREASON
description: "Site Blocking Reason"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASON')/$value
semantic_en: "Site Blocking Reason"
semantic_vi: "Site Blocking Reason — CDS view giao diện dựa trên twrf11."
keywords:
  - "site"
  - "blocking"
  - "reason"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITEBLOCKINGREASON

**Site Blocking Reason**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteBlockingReason` | ✓ | |  | `spgr1` | `CHAR(2)` | Blocking Reason |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SiteBlockingReasonT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTEBLCKNGREASN'
@EndUserText.label: 'Site Blocking Reason'

@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@VDM.viewType: #BASIC

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'SiteBlockingReason',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SEARCHABLE_ENTITY,
                             #EXTRACTION_DATA_SOURCE ],
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   },
   sapObjectNodeType: {                
                     name: 'RetailSite'  
                   },      
   resultSet.sizeCategory: #XS
}

define view I_SiteBlockingReason
  as select from twrf11
  association [0..*] to I_SiteBlockingReasonT as _Text on $projection.SiteBlockingReason = _Text.SiteBlockingReason
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key spgr1 as SiteBlockingReason,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
