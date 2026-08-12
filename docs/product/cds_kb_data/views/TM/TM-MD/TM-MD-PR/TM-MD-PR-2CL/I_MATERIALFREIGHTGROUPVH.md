---
name: I_MATERIALFREIGHTGROUPVH
description: "This CDS view provides value help for Material Freight Group. This view should be used for value help purposes only. If you intend to select the entire business data, use the CDS view I_MaterialFreightGroup instead."
app_component: TM-MD-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALFREIGHTGROUPVH')/$value
semantic_en: "This CDS view provides value help for Material Freight Group. This view should be used for value help purposes only. If you intend to select the entire business data, use the CDS view I_MaterialFreightGroup instead."
semantic_vi: "Material Freight Group — CDS view cơ bản dựa trên I_MaterialFreightGroup."
keywords:
  - "material"
  - "freight"
  - "group"
  - "name"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-MD-PR-2CL
  - interface-view
  - material
  - TM-MD
  - TM-MD-PR
  - TM-MD-PR-2CL
---
# I_MATERIALFREIGHTGROUPVH

**This CDS view provides value help for Material Freight Group. This view should be used for value help purposes only. If you intend to select the entire business data, use the CDS view I_MaterialFreightGroup instead.**

| Property | Value |
|---|---|
| App Component | `TM-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALFREIGHTGROUPVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialFreightGroup` | ✓ | |  |  | `CHAR(8)` | Material Freight Group |
| `MaterialFreightGroupName` |  | |  | `_Text[1:Language = $session.system_language].MaterialFreightGroupName` | `CHAR(20)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALFREIGHTGROUPVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALFREIGHTGROUPVH')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
//@Analytics.technicalName:
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Material Freight Group'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'MaterialFreightGroup',
                resultSet.sizeCategory: #XS,
                semanticKey: ['MaterialFreightGroup'],
                dataCategory: #VALUE_HELP,
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ] }
@VDM: { viewType: #BASIC, 
        lifecycle.status: #DEPRECATED,
        lifecycle.successor: 'I_MaterialFreightGroupStdVH'
      }
@Search.searchable: true
define view entity I_MaterialFreightGroupVH 
as select from I_MaterialFreightGroup
{
  @ObjectModel.text.element: ['MaterialFreightGroupName']
  key MaterialFreightGroup,
  //Associations
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Semantics.text:true
  _Text[1:Language = $session.system_language].MaterialFreightGroupName as MaterialFreightGroupName
  
}
```
