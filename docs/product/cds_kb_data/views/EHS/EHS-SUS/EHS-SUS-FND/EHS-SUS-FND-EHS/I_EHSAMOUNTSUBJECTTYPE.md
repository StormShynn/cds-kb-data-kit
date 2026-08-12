---
name: I_EHSAMOUNTSUBJECTTYPE
description: "This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value
semantic_en: "This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Subject Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "ehs"
  - "subject"
  - "type"
  - "amount"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSAMOUNTSUBJECTTYPE

**This CDS view retrieves the type of subject (for example, listed substance, chemical, chemical/physical property, or something else) on which any amount of environmental data is based. Subjects are always specified for environmental limits and equations as well as for data collection, sampling, calculation, and location aggregation activities. This CDS view provides the data to answer the following business questions: What are the subject types defined in my system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountSubjectType` | ✓ | |  | `cast( dd07l.domvalue_l as ehfnd_amns_subj_type )` | `CHAR(2)` | Subject Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSAmountSubjectTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPE')/$value)*

```abap
@EndUserText.label: 'EHS Subject Type'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:
{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName:#LOCAL
}

@ObjectModel:
{
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET],
    modelingPattern: #NONE,
    representativeKey: 'EHSAmountSubjectType',
    usageType:
    {
        serviceQuality: #A,
        sizeCategory:  #L,
        dataClass: #META
    },
    sapObjectNodeType.name: 'EHSSubjectType'
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_EHSAmountSubjectType
  as select from dd07l
  association [0..*] to I_EHSAmountSubjectTypeText as _Text on $projection.EHSAmountSubjectType = _Text.EHSAmountSubjectType
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as ehfnd_amns_subj_type ) as EHSAmountSubjectType,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text
}
where
      dd07l.domname  = 'EHFND_AMNS_SUBJ_TYPE'
  and dd07l.as4local = 'A'
```
