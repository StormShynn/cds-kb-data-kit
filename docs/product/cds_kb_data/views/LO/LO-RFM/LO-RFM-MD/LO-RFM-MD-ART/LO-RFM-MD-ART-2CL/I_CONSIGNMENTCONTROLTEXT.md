---
name: I_CONSIGNMENTCONTROLTEXT
description: "Consignment Control - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROLTEXT')/$value
semantic_en: "Consignment Control - Text"
semantic_vi: "Consignment Control - Text — CDS view giao diện dựa trên wrft_cons_procgt."
keywords:
  - "consignment"
  - "control"
  - "text"
  - "language"
  - "description"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_CONSIGNMENTCONTROLTEXT

**Consignment Control - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ConsignmentControl` | ✓ | |  | `cast( wrf_cons_procg as consignmentcontrol preserving type )` | `CHAR(1)` | Consignment Control |
| `ConsignmentControlDescription` |  | |  | `wrf_cons_descr` | `CHAR(60)` | Name of Consignment Control |
| `_Language` | | ✓ | | | | |
| `_ConsignmentControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROLTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROLTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICONSICONTROLT'
@EndUserText.label: 'Consignment Control - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true 
@VDM.viewType: #BASIC
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'ConsignmentControl',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_ConsignmentControlText
  as select from wrft_cons_procgt
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
  association to parent I_ConsignmentControl as _ConsignmentControl on $projection.ConsignmentControl = _ConsignmentControl.ConsignmentControl
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras          as Language,
      @ObjectModel.foreignKey.association: '_ConsignmentControl'
      @ObjectModel.text.element: ['ConsignmentControlDescription']
  key cast( wrf_cons_procg as consignmentcontrol preserving type ) as ConsignmentControl,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      wrf_cons_descr as ConsignmentControlDescription,

      _ConsignmentControl,
      _Language
}
```
