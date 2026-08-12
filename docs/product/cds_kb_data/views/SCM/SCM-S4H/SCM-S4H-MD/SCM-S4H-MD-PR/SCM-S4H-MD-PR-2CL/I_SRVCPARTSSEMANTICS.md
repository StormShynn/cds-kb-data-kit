---
name: I_SRVCPARTSSEMANTICS
description: "TSDM Mapping Semantic"
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICS')/$value
semantic_en: "TSDM Mapping Semantic"
semantic_vi: "TSDM Mapping Semantic — CDS view giao diện dựa trên TSDM Mapping Semantic."
keywords:
  - "tsdm"
  - "mapping"
  - "semantic"
  - "semantics"
  - "type"
tags:
  - SCM
  - bo:salesorganization
  - component:SCM-S4H-MD-PR-2CL
  - interface-view
  - SCM-S4H
  - SCM-S4H-MD
  - SCM-S4H-MD-PR
  - SCM-S4H-MD-PR-2CL
---
# I_SRVCPARTSSEMANTICS

**TSDM Mapping Semantic**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SCMSemantics` | ✓ | |  | `cast( semkey.sem as /scmb/prm_sem )` | `CHAR(30)` | TSDM Mapping: Semantics |
| `SCMSemanticType` |  | |  | `semtp` | `CHAR(3)` | TSDM Mapping: Semantic Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcPartsSemanticsT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICS')/$value)*

```abap
@ClientHandling.algorithm:             #SESSION_VARIABLE
@ObjectModel.representativeKey:       'SCMSemantics'
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.dataCategory:             #VALUE_HELP
@ObjectModel.supportedCapabilities:    #ANALYTICAL_DIMENSION
@EndUserText.label:                   'TSDM Mapping Semantic'
@Analytics:                            {dataCategory:                 #DIMENSION,
                                       internalName:                 #LOCAL }
@VDM.viewType:                         #BASIC
@AccessControl.authorizationCheck:     #NOT_REQUIRED
@AbapCatalog.sqlViewName:              'ISPSEMANTICS'
@AbapCatalog.compiler.compareFilter:   true
@AbapCatalog.preserveKey:              true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:             true
@Search.searchable:                    true

define view I_SrvcPartsSemantics
  as select from /scmb/semkey as semkey

  association [0..*] to I_SrvcPartsSemanticsT as _Text on $projection.SCMSemantics = _Text.SCMSemantics
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key cast( semkey.sem as /scmb/prm_sem ) as SCMSemantics,

      semtp               as SCMSemanticType,
      
      _Text
}
```
