---
name: I_EHSDATACOLLINPUTMETHOD
description: "This CDS view retrieves the data input method for data collections. Some input methods, for example, are manual, manual from a specific app (such as My Emissions Declarations), or automatic. This CDS view provides the data to answer the following business questions: In what ways can I enter data to be collected and used in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHOD')/$value
semantic_en: "This CDS view retrieves the data input method for data collections. Some input methods, for example, are manual, manual from a specific app (such as My Emissions Declarations), or automatic. This CDS view provides the data to answer the following business questions: In what ways can I enter data to be collected and used in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Data Collection Input Method — CDS view giao diện dựa trên dd07l."
keywords:
  - "ehs"
  - "data"
  - "collection"
  - "input"
  - "method"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
  - bo:salesorganization
---
# I_EHSDATACOLLINPUTMETHOD

**This CDS view retrieves the data input method for data collections. Some input methods, for example, are manual, manual from a specific app (such as My Emissions Declarations), or automatic. This CDS view provides the data to answer the following business questions: In what ways can I enter data to be collected and used in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSDataCollectionInputMethod` | ✓ | |  | `cast( dd07l.domvalue_l as ehenv_mdef_input_method )` | `CHAR(2)` | Data Collection Input Method |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSDataCollInputMethodText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHOD')/$value)*

```abap
@EndUserText.label: 'EHS Data Collection Input Method'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:
{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName:#LOCAL
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:
{
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET],
    modelingPattern: #NONE,
    representativeKey: 'EHSDataCollectionInputMethod',
    usageType:
    {
        serviceQuality: #A,
        sizeCategory:  #L,
        dataClass: #META
    },
    sapObjectNodeType.name: 'EHSDataCollectionInputMethod'
}

define view entity I_EHSDataCollInputMethod
  as select from dd07l
  association [0..*] to I_EHSDataCollInputMethodText as _Text on $projection.EHSDataCollectionInputMethod = _Text.EHSDataCollectionInputMethod
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as ehenv_mdef_input_method ) as EHSDataCollectionInputMethod,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text
}
where
      dd07l.domname  = 'EHENV_MDEF_INPUT_METHOD'
  and dd07l.as4local = 'A'
```
