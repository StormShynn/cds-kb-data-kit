---
name: I_CNDNDOCITMACTIVATIONSTATUST
description: "This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value
semantic_en: "This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cndn Doc Item Activation Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "doc"
  - "item"
  - "activation"
  - "status"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNDOCITMACTIVATIONSTATUST

**This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnDocItmActivationStatus` | ✓ | |  | `cast( dd07t.domvalue_l as wcb_cndn_doc_itm_act_sts )` | `CHAR(1)` | Condition Document Item Activation Status |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnDocItmActivationStatusName` |  | |  | `cast( dd07t.ddtext as wcb_cndn_doc_itm_act_sts_name preserving type )` | `CHAR(60)` | Condition Document Item Activation Status Name |
| `_Language` | | ✓ | | | | |
| `_CndnDocItmActivationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value)*

```abap
@EndUserText.label: 'Cndn Doc Item Activation Status - Text'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'CndnDocItmActivationStatus',
    modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                              #CDS_MODELING_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE,
                              #LANGUAGE_DEPENDENT_TEXT,
                              #SEARCHABLE_ENTITY,
                              #SQL_DATA_SOURCE ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IWCBCNDOCIAST'
    }
@Metadata: {
    ignorePropagatedAnnotations: true
    }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnDocItmActivationStatusT
  as select from dd07t

  association        to parent I_CndnDocItmActivationStatus as _CndnDocItmActivationStatus on $projection.CndnDocItmActivationStatus = _CndnDocItmActivationStatus.CndnDocItmActivationStatus

  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnDocItmActivationStatus'
      @ObjectModel.text.element: ['CndnDocItmActivationStatusName']
  key cast( dd07t.domvalue_l as wcb_cndn_doc_itm_act_sts )                  as CndnDocItmActivationStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cndn_doc_itm_act_sts_name preserving type ) as CndnDocItmActivationStatusName,

      /* Associations */
      _CndnDocItmActivationStatus,
      _Language
}
where
      dd07t.domname  = 'WCB_DEACTIVATED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
