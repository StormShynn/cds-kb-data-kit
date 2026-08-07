---
name: I_SRVCREFERENCEOBJECTTYPETEXT
description: Srvcreferenceobjecttypetext
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCREFERENCEOBJECTTYPETEXT

**Srvcreferenceobjecttypetext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceReferenceObjectType` | ✓ | |  | `cast(domvalue_l as abap.char(1))` |
| `Language` | ✓ | |  | `ddlanguage` |
| `ServiceReferenceObjectTypeText` |  | |  | `ddtext` |
| `_SrvcReferenceObjectType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcReferenceObjectType` | `I_SrvcReferenceObjectType` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Type of Service Reference Object - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVREFOBJTYPTT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   representativeKey: 'ServiceReferenceObjectType',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   }
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcReferenceObjectTypeText
  as select from dd07t
  association [1]    to I_SrvcReferenceObjectType as _SrvcReferenceObjectType on $projection.ServiceReferenceObjectType = _SrvcReferenceObjectType.ServiceReferenceObjectType
  association [1..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_SrvcReferenceObjectType'
  key  cast(domvalue_l as abap.char(1)) as ServiceReferenceObjectType,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  ddlanguage                       as Language,
       @Semantics.text: true
       @EndUserText.label: 'Description'
       ddtext                           as ServiceReferenceObjectTypeText,

       _SrvcReferenceObjectType,
       _Language
}
where
      domname  = 'CRMS4_TYPE_OBJECT'
  and as4local = 'A'
```
