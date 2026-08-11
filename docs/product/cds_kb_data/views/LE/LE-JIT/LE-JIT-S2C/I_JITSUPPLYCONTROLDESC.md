---
name: I_JITSUPPLYCONTROLDESC
description: "This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Supply Control Description — CDS view giao diện dựa trên njit_d_sc_desc."
keywords:
  - "jit"
  - "supply"
  - "control"
  - "description"
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
---
# I_JITSUPPLYCONTROLDESC

**This CDS view provides language-dependent text descriptions for JIT supply control configurations. It stores the descriptive text for supply controls in multiple languages, supporting internationalization of the supply control master data. This CDS view provides the data to answer the following business questions: What is the description of a supply control in a specific language? Which languages have descriptions for a supply control? What is the supply control ID associated with a description? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlUUID` | ✓ | |  | `supplycontroluuid` | `RAW(16)` | NodeID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SupplyControlID` |  | |  | `supplycontrolid` | `CHAR(10)` | Supply Control |
| `SupplyControlDesc` |  | |  | `supplycontroldesc` | `CHAR(40)` | Supply Control Description |
| `_Language` | | ✓ | | | | |
| `_JITSupplyControlHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLDESC')/$value)*

```abap
@AccessControl:{
     authorizationCheck       : #MANDATORY,
     personalData.blocking    : #REQUIRED
}
@EndUserText.label            : 'JIT Supply Control Description'
@Metadata.allowExtensions     : true
@ObjectModel: {
     dataCategory             : #TEXT,
     modelingPattern          : #LANGUAGE_DEPENDENT_TEXT,
     representativeKey        : 'SupplyControlUUID',
     sapObjectNodeType.name   : 'JITSupplyControlDescription',
     semanticKey              : ['SupplyControlID'],            
     supportedCapabilities    : [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
     usageType: {
          dataClass           : #MASTER,
          serviceQuality      : #A,
          sizeCategory        : #S
  }
}
@VDM.viewType                 : #BASIC
define view entity I_JITSupplyControlDesc
  as select from njit_d_sc_desc
  association        to parent I_JITSupplyControlHeader as _JITSupplyControlHeader on $projection.SupplyControlUUID = _JITSupplyControlHeader.SupplyControlUUID
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_JITSupplyControlHeader'
      /* start suppress warning shlporigin_not_inherited */
  key supplycontroluuid as SupplyControlUUID,
      /* end suppress warning shlporigin_not_inherited */
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language          as Language,
      supplycontrolid   as SupplyControlID,
      @Semantics.text: true
      supplycontroldesc as SupplyControlDesc,
      //Associations
      _JITSupplyControlHeader,
      _Language
}
```
