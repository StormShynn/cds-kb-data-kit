---
name: I_JITPCKGGRPDEFTXT
description: "This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Definition - Text — CDS view giao diện dựa trên njit_d_pgd_txt."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "definition"
  - "text"
  - "pckg"
  - "language"
  - "desc"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
  - bo:companycode
---
# I_JITPCKGGRPDEFTXT

**This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JITPckgGrpDesc` |  | |  | `pckg_grp_desc` | `CHAR(50)` | Package Group Specification Description |
| `_Language` | | ✓ | | | | |
| `_JITPackageGroupDefinition` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value)*

```abap
@AccessControl              : { authorizationCheck       : #MANDATORY
                              }
@Analytics                  : { internalName             : #LOCAL,
                                technicalName            : 'IJITPGDEFT'
                              }
@EndUserText.label          : 'JIT Packing Group Definition - Text'
@Metadata.allowExtensions   : true
@ObjectModel                : { dataCategory             : #TEXT,
                                modelingPattern          : #LANGUAGE_DEPENDENT_TEXT,
                                representativeKey        : 'JITPckgGrpDefUUID',
                                sapObjectNodeType.name   : 'JITPackgGrpSpecDescription',
                                supportedCapabilities    : [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                usageType                : { dataClass     : #MASTER,
                                                             serviceQuality: #A,
                                                             sizeCategory  : #S }
                                }
@Search.searchable          : true
@VDM.viewType               : #BASIC
define view entity I_JITPckgGrpDefTxt
  as select from njit_d_pgd_txt
  association [0..1] to I_Language             as _Language                  on $projection.Language = _Language.Language
  association        to parent I_JITPckgGrpDef as _JITPackageGroupDefinition on $projection.JITPckgGrpDefUUID = _JITPackageGroupDefinition.JITPckgGrpDefUUID
{
      @ObjectModel.foreignKey.association: '_JITPackageGroupDefinition'
  key db_key        as JITPckgGrpDefUUID,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras         as Language,
      @EndUserText.label: 'Package Group Spec Description'
      @EndUserText.quickInfo: 'Package Group Spec Description'
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      pckg_grp_desc as JITPckgGrpDesc,
      _JITPackageGroupDefinition,
      _Language

}
```
