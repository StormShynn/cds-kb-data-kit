---
name: I_INSPSPECVERSIONLONGTEXT
description: "This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value
semantic_en: "This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Master Insp Characteristic Long Text — CDS view cơ bản (master data) dựa trên qpmkltext."
keywords:
  - "master"
  - "insp"
  - "characteristic"
  - "long"
  - "text"
  - "inspection"
  - "specification"
  - "plant"
  - "version"
  - "internal"
  - "number"
  - "language"
tags:
  - QM
  - bo:companycode
  - component:QM-PT-2CL
  - interface-view
  - lob:quality management
  - plan
  - QM-PT
  - QM-PT-2CL
  - bo:project
---
# I_INSPSPECVERSIONLONGTEXT

**This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` | ✓ | |  | `zaehler` | `CHAR(4)` | Plant for Master Inspection Characteristic |
| `InspectionSpecification` | ✓ | |  | `mkmnr` | `CHAR(8)` | Master Inspection Characteristic |
| `InspectionSpecificationVersion` | ✓ | |  | `version` | `CHAR(6)` | Version Number of Master Inspection Characteristic |
| `LongTextInternalNumber` | ✓ | |  | `counter` | `INT2(5)` | Long Text Counter |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `LongTextID` |  | |  | `textid` | `CHAR(4)` | Text ID |
| `InspSpecVersionLongText` |  | |  | `content` |  |  |
| `LongTextCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  | `created_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  | `changed_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_InspSpecificationVersion` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSpecificationVersion` | `I_InspSpecificationVersion` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Master Insp Characteristic Long Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #S,
        serviceQuality: #A
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true

define view entity I_InspSpecVersionLongText
  as select from qpmkltext

  association [1]    to I_InspSpecificationVersion as _InspSpecificationVersion on  $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
                                                                                and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
                                                                                and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
  association [1..1] to I_Language                 as _Language                 on  $projection.Language = _Language.Language

{
  key zaehler    as InspectionSpecificationPlant,
  key mkmnr      as InspectionSpecification,
  key version    as InspectionSpecificationVersion,
  key counter    as LongTextInternalNumber,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu      as Language,
      textid     as LongTextID,
      
      @EndUserText:{ label: 'Detailed Description' }
      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.6 }
      content    as InspSpecVersionLongText,
      @Semantics.user.createdBy: true
      created_by as LongTextCreatedByUser,
      @Semantics.systemDate.createdAt: true
      created_at as LongTextCreatedAt,
      @Semantics.user.lastChangedBy: true
      changed_by as LongTextLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      changed_at as LongTextLastChangedAt,


      /* Association */
      _InspSpecificationVersion,
      _Language
}
```
