---
name: I_BPCOCODECOMPANYRELATIONSHIP
description: "Company Relationship of BP in CoCode"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELATIONSHIP')/$value
semantic_en: "Company Relationship of BP in CoCode"
semantic_vi: "Company Relationship of BP in CoCode — CDS view giao diện dựa trên dd07l."
keywords:
  - "company"
  - "relationship"
  - "cocode"
  - "code"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPCOCODECOMPANYRELATIONSHIP

**Company Relationship of BP in CoCode**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELATIONSHIP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPCoCodeCompanyRelationship` | ✓ | |  | `cast ( dd07l.domvalue_l as bp_ccom_re )` | `CHAR(1)` | Company Relationship in Company Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPCoCodeCompanyRelshpText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELATIONSHIP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELATIONSHIP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPCCCORELSHP'
@EndUserText.label: 'Company Relationship of BP in CoCode'
@ObjectModel.representativeKey: 'BPCoCodeCompanyRelationship'

@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  supportedCapabilities:   [#EXTRACTION_DATA_SOURCE, // for API Hub
                            #SQL_DATA_SOURCE]
}
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'DE_BPOrgRelationshipCode' 
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true // For C1-Release  
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPCoCodeCompanyRelationship   
  as select from dd07l  
    
    association [0..*] to I_BPCoCodeCompanyRelshpText as _Text on $projection.BPCoCodeCompanyRelationship = _Text.BPCoCodeCompanyRelationship
{
     @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bp_ccom_re ) as BPCoCodeCompanyRelationship,
      _Text
}
where
      dd07l.domname  = 'BP_COMP_RE'
  and dd07l.as4local = 'A'
```
