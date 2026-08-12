---
name: I_JITDELIVSQNCGRPDESCBASIC
description: "This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sequence Group Description — CDS view giao diện dựa trên njit_d_dsg_desc."
keywords:
  - "delivery"
  - "sequence"
  - "group"
  - "description"
  - "deliv"
  - "sqnc"
  - "language"
  - "desc"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITDELIVSQNCGRPDESCBASIC

**This CDS view provides language-dependent text descriptions for JIT delivery sequence groups. This view stores the descriptive text for delivery sequence groups in multiple languages. This CDS view provides the data to answer the following business questions: What is the description of a delivery sequence group in a specific language? Which languages have descriptions for a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpUUID` | ✓ | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `JITDelivSqncGrpDesc` |  | |  | `jitdelivsqncgrpdesc` | `CHAR(40)` | Delivery Seq. Group Description |
| `_Language` | | ✓ | | | | |
| `_JITDelivSqncGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPDESCBASIC')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { internalName            : #LOCAL,
                                technicalName           : 'IJITDSGDESC'
                              }
@EndUserText.label          : 'Delivery Sequence Group Description'
@Metadata.allowExtensions   :true
@ObjectModel: {
  dataCategory              : #TEXT,
  modelingPattern           : #LANGUAGE_DEPENDENT_TEXT,
  representativeKey         : 'JITDelivSqncGrpUUID',
  sapObjectNodeType.name    : 'JITDeliverySequenceGrpDesc',
  supportedCapabilities     : [ #LANGUAGE_DEPENDENT_TEXT,
                                #CDS_MODELING_ASSOCIATION_TARGET,
                                #CDS_MODELING_DATA_SOURCE,
                                #SQL_DATA_SOURCE
                              ],
  usageType                 : { dataClass               : #MASTER,
                                serviceQuality          : #A,
                                sizeCategory            : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITDelivSqncGrpDescBasic
  as select from njit_d_dsg_desc
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeader on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeader.JITDelivSqncGrpUUID
  association [0..1] to I_Language                          as _Language              on $projection.Language = _Language.Language
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeader'
  key jitdelivsqncgrpuuid as JITDelivSqncGrpUUID,
      /* end suppress warning shlporigin_not_inherited */
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language            as Language,
      @Semantics.text: true
      jitdelivsqncgrpdesc as JITDelivSqncGrpDesc,
      _JITDelivSqncGrpHeader,
      _Language
}
```
