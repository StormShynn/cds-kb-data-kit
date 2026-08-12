---
name: I_INCIDENTGROUPSEVERITYTEXT
description: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value
semantic_en: "This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Severity - Text — CDS view giao diện dựa trên ehhssc_grp_sev_t."
keywords:
  - "severity"
  - "text"
  - "incident"
  - "group"
  - "language"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - transaction
  - bo:project
---
# I_INCIDENTGROUPSEVERITYTEXT

**This CDS view provides a structured representation of incident categorization data within Incident Management. It serves as a basic interface view that exposes incident group classifications, including Incident, Near Miss, and Safety Observation groups, along with severity levels and administrative tracking information. The view enables data extraction for analytical purposes and supports transactional operations for managing how incidents are categorized and grouped for reporting and analysis. This CDS view provides the data to answer the following business questions: How are incidents classified across different categories (incident groups, near miss groups, and safety observation groups)? What is the severity distribution of incident groups, and which groups represent the highest risk levels? Which incidents are associated with specific group classifications for compliance and regulatory reporting? What is the volume and categorization of near misses and safety observations compared to actual incidents across the organization? Who created or last modified specific incident group classifications, and when were these changes made? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSIncidentGroupSeverity` | ✓ | |  | `cast(code as ehhss_grp_sev_type_code_nconv)` | `CHAR(21)` | Severity Level Code |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `EHSIncidentGroupSeverityText` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUPSEVERITYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSGRPSEVTXT'
@EndUserText.label: 'Severity - Text'
@VDM.viewType: #BASIC

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel : { dataCategory: #TEXT,
                 representativeKey: 'EHSIncidentGroupSeverity',
                 usageType: {serviceQuality: #C,
                             sizeCategory: #L,
                             dataClass: #META} }
                             
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true                             

define view I_IncidentGroupSeverityText
  as select from ehhssc_grp_sev_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      
  key cast(code as ehhss_grp_sev_type_code_nconv)   as EHSIncidentGroupSeverity,
   @Semantics.language: true
   @ObjectModel.foreignKey.association: '_Language'
  key language                                      as Language,

  @Semantics.text:true
  @EndUserText.label: 'Severity'
  description                                       as EHSIncidentGroupSeverityText,
  
  _Language

}
```
