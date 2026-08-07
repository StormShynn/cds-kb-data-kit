---
name: I_SERVICEDOCUMENTTYPETEXT
description: Service DocumentUMENTTYPETEXT
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
  - service
  - document
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTTYPETEXT

**Service DocumentUMENTTYPETEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  | `process_type` |
| `Language` | ✓ | |  | `langu` |
| `ServiceDocumentTypeName` |  | |  | `p_description` |
| `ServiceDocumentTypeShortName` |  | |  | `p_description_20` |
| `_ServiceDocumentType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCTYPETEXT',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service Transaction Type - Text'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                     
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ServiceDocumentTypeText
  as select from crmc_proc_type_t
  association [1..1] to I_ServiceDocumentType as _ServiceDocumentType on $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key process_type     as ServiceDocumentType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,
       @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @Semantics.text: true
      p_description    as ServiceDocumentTypeName,
      p_description_20 as ServiceDocumentTypeShortName,
      
      _ServiceDocumentType,
      _Language
}
```
