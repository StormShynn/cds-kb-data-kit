---
name: I_EHSORGUNITTEXT
description: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value
semantic_en: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "OrganizationUnit - Text — CDS view giao diện dựa trên t527x."
keywords:
  - "organizationunit"
  - "text"
  - "language"
  - "organizational"
  - "unit"
  - "name"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - master-data
  - bo:salesorder
---
# I_EHSORGUNITTEXT

**This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprsl` | `LANG(1)` | Language Key |
| `OrganizationalUnit` | ✓ | |  | `orgeh` | `NUMC(8)` | Organizational Unit |
| `OrganizationalUnitName` |  | |  | `orgtx` | `CHAR(25)` | Short Text of Organizational Unit |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNITTEXT')/$value)*

```abap
@VDM.viewType:  #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'OrganizationUnit - Text'
@ObjectModel.representativeKey: 'OrganizationalUnit'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled:true
@ObjectModel.dataCategory:#TEXT
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_EHSOrgUnitText
  as select from t527x
  association [0..1] to I_Language as _Language on t527x.sprsl = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key sprsl as Language,

  key orgeh as OrganizationalUnit,

      @Semantics.text: true
      orgtx as OrganizationalUnitName,

      _Language
}
where
      t527x.begda <= $session.system_date
  and t527x.endda >= $session.system_date
```
