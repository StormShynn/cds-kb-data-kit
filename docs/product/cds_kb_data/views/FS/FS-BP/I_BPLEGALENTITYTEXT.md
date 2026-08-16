---
name: I_BPLEGALENTITYTEXT
description: "Bplegalentitytext"
semantic_vi: "View I_BPLEGALENTITYTEXT cung cấp mô tả văn bản cho các thực thể pháp lý đối tác kinh doanh trong một ngôn ngữ cụ thể. Nó được sử dụng để lấy và hiển thị mô tả của các thực thể pháp lý cho đối tác kinh doanh."
keywords:
  - "business partner"
  - "legal entity"
  - "description"
  - "language"
  - "text view"
  - "interface view"
  - "fs-bp"
  - "sap cds"
  - "business partner legal entity"
  - "bplegalentitydescription"
semantic_en: "The I_BPLEGALENTITYTEXT view provides text descriptions for business partner legal entities in a specific language. It is used to retrieve and display the descriptions of legal entities for business partners."
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPLEGALENTITYTEXT

**Bplegalentitytext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BusinessPartnerLegalEntity` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_entity_report )` |  |  |
| `BPLegalEntityDescription` |  | |  | `ddtext` |  |  |
| `_BPLegalEntity` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPLegalEntity` | `I_BPLegalEntity` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLENTITYTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,    
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BusinessPartnerLegalEntity'                            
}             
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'BP Legal Entity - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPLegalEntityText as select from dd07t
association [0..1] to I_BPLegalEntity as _BPLegalEntity on $projection.BusinessPartnerLegalEntity  = _BPLegalEntity.BusinessPartnerLegalEntity
association [0..1] to I_Language      as _Language      on $projection.Language       = _Language.Language
  {
@Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
  
      @ObjectModel.text.element: ['BPLegalEntityDescription']
      @ObjectModel.foreignKey.association: '_BPLegalEntity'
  key cast ( dd07t.domvalue_l as bp_entity_report ) as BusinessPartnerLegalEntity,
      @Semantics.text: true
      
      dd07t.ddtext     as BPLegalEntityDescription,
      
      _BPLegalEntity,
      _Language  
}
where
      dd07t.domname  = 'BP_ENTITY_REPORT'
  and dd07t.as4local = 'A'
```
