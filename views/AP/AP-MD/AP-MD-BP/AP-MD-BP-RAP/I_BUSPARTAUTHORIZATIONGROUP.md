---
name: I_BUSPARTAUTHORIZATIONGROUP
description: "This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value
semantic_en: "This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - bo:companycode
  - component:AP-MD-BP-RAP
  - interface-view
  - metadata-only
---
# I_BUSPARTAUTHORIZATIONGROUP

**This CDS view provides an interface for accessing business partner authorization groups. The associated text view delivers text descriptions for business partner authorization groups in multiple languages. It also helps you retrieve the language-dependent names for authorization objects and their groups. This CDS view and the associated text view provide the data to answer the following business questions: Which authorization groups are available for controlling access to business partner data in the system? Which authorization groups exist for a particular authorization object? What is the description of a specific business partner authorization group in a given language? What languages are available for the descriptions of business partner authorization groups?**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AuthorizationObject` |  | |  |  | `CHAR(10)` | Authorization Group Object |
